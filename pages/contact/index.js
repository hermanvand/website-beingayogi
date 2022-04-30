import React from 'react'
import StoryblokService from '../../adapters/storyblok-service'
import Layout from "../../components/layout/layout"
import Contact from '../../components/pages/contact'

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    //console.log(JSON.stringify(props))

    this.state = {
      story: props.res.data.story
    }
  }

  static async getInitialProps({ query }) {

    StoryblokService.setQuery(query)

    let res = await StoryblokService.get('cdn/stories/contact', {
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
        <Contact content={contentOfStory} />
      </Layout>
    )
  }

}

export default ContactPage