import React from 'react'
import StoryblokService from '../adapters/storyblok-service'
import DynamicPage from '../components/DynamicPage'
import Layout from "../components/layout/layout"
import NotFound from "../components/pages/notFound"
import validator from 'validator';

class DynamicSlug extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story
    }
  }

  static async getInitialProps({ query }) {
    // console.log(JSON.stringify(query))
    // var chars = 'a-zA-Z0-9_.~:\\-\\s';
    // query.slug = validator.whitelist(query.slug, chars)

    let res = {};
    try {
      StoryblokService.setQuery(query)
      res = await StoryblokService.get('cdn/stories/'+query.slug, {
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
    let loadPage = <DynamicPage content={contentOfStory} />
    if (contentOfStory == "not found") {
      loadPage = <NotFound></NotFound>
    }

    return (
      <Layout title='Being A Yogi' description='Welcome to Being A Yogi'>
        {loadPage}
      </Layout>
    )
  }
}

export default DynamicSlug