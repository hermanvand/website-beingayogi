import React from 'react'
import StoryblokService from '../../../adapters/storyblok-service'
import Layout from "../../../components/layout/layout"
import NotFound from '../../../components/mediatype/notfound'
import Text from '../../../components/mediatype/text'
import Video from '../../../components/mediatype/video'

class ArticlePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story
    }
  }

  static async getInitialProps({ query }) {

    StoryblokService.setQuery(query)

    let res = await StoryblokService.get('cdn/stories/artikel/'+query.mediatype+'/'+query.slug, {
      "resolve_relations": "subjectRow.articleList"
    })
    //let res = await StoryblokService.get('cdn/stories?filter_query[onderwerp][is]=houdingen', {})

    return {
      res
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const contentOfStory = this.state.story.content
    const tagList = this.state.story.tag_list
    const thisDate = this.state.story.created_at

    let mediaTypePage
    switch (contentOfStory.component) {
      case "textPage":
        mediaTypePage = <Text content={contentOfStory} tags={tagList} thisDate={thisDate}/>
        break;
      case "videoPage":
        mediaTypePage = <Video content={contentOfStory}  tags={tagList} thisDate={thisDate}/>
        break;
      default:
        mediaTypePage = <NotFound content={contentOfStory}  tags={tagList}/>
        break;
    }

    return (
      <Layout title={contentOfStory.title} description={contentOfStory.intro}>
        {mediaTypePage}
      </Layout>
    )
  }
}

export default ArticlePage