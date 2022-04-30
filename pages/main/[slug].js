import React from 'react'
import StoryblokService from '../../adapters/storyblok-service'
import Layout from "../../components/layout/layout"
import Main from '../../components/pages/main/index'

class mainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story
    }
  }

  static async getInitialProps({ query }) {

    StoryblokService.setQuery(query)

    let res = await StoryblokService.get('cdn/stories/main/'+query.slug, {
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

    return (
      <Layout title={contentOfStory.title} description={contentOfStory.intro}>
        <Main content={contentOfStory} />
      </Layout>
    )
  }
}

export default mainPage