import React from 'react'
import StoryblokService from '../../adapters/storyblok-service'
import Layout from "../../components/layout/layout"
import Info from '../../components/pages/info/index'
import NotFound from '../../components/pages/notFound'

class InfoPage extends React.Component {
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
      res = await StoryblokService.get('cdn/stories/info/'+query.slug, {
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
    let loadPage = <Info content={contentOfStory} />
    if (contentOfStory == "not found") {
      loadPage = <NotFound></NotFound>
    }

    return (
      <Layout title={contentOfStory.title} description={contentOfStory.intro}>
        {loadPage}
      </Layout>
    )
  }
}

export default InfoPage