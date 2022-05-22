import React from 'react'
import StoryblokService from '../../adapters/storyblok-service'
import Layout from "../../components/layout/layout"
import Main from '../../components/pages/main/index'
import NotFound from '../../components/pages/notFound'

class mainPage extends React.Component {
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
      res = await StoryblokService.get('cdn/stories/main/'+query.slug, {
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
    let loadPage = <Main content={contentOfStory} />
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

export default mainPage