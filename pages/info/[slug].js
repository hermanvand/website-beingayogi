import React from 'react'
import StoryblokService from '../../adapters/storyblok-service'
import Layout from "../../components/layout/layout"
import Info from '../../components/info/index'

class InfoPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story
    }
  }

  static async getInitialProps({ query }) {

    StoryblokService.setQuery(query)

    let res = await StoryblokService.get('cdn/stories/info/'+query.slug, {
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
        <Info content={contentOfStory} />
      </Layout>
    )
  }
}

export default InfoPage