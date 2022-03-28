import React from 'react'
import StoryblokService from '../adapters/storyblok-service'
import DynamicPage from '../components/DynamicPage'
import Layout from "../components/layout/layout"

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story
    }
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    let res = await StoryblokService.get('cdn/stories/home', {
        "resolve_relations": "subjectRow.articleList"
    })

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
      <Layout title='Being A Yogi' description='Welcome to Being A Yogi'>
        <DynamicPage content={contentOfStory} />
      </Layout>
    )
  }
}

export default HomePage