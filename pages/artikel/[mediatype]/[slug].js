import React from 'react'
import StoryblokService from '../../../adapters/storyblok-service'
import Layout from "../../../components/layout/layout"
import Text from '../../../components/pages/mediatype/text'
import Video from '../../../components/pages/mediatype/video'
import NotFound from '../../../components/pages/notFound'

class ArticlePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story
    }
  }

  static async getInitialProps({ query }) {
    let res = {};
    try {
      StoryblokService.setQuery(query)
      res = await StoryblokService.get('cdn/stories/artikel/'+query.mediatype+'/'+query.slug, {
        "resolve_relations": "subjectRow.articleList"
      })
    }
    catch(error) {
        // log the error
        //console.log("ERROR!!!")
        res = {"data":{"story":{"content":"not found","title":"not found","description":"not found"}}}
    }
    return {
      res
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const contentOfStory = this.state.story.content

    let loadPage
    if (contentOfStory == "not found") {
      loadPage = <NotFound></NotFound>
    }
    else {
      const tagList = this.state.story.tag_list
      const thisDate = this.state.story.created_at

      switch (contentOfStory.component) {
        case "textPage":
          loadPage = <Text content={contentOfStory} tags={tagList} thisDate={thisDate}/>
          break;
        case "videoPage":
          loadPage = <Video content={contentOfStory}  tags={tagList} thisDate={thisDate}/>
          break;
        default:
          loadPage = <NotFound/>
          break;
      }
  }

    return (
      <Layout title={contentOfStory.title} description={contentOfStory.intro}>
        {loadPage}
      </Layout>
    )
  }
}

export default ArticlePage