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

export async function getStaticProps({ params }) {
  // console.log(JSON.stringify(params))
  // var chars = 'a-zA-Z0-9_.~:\\-\\s';
  // params.slug = validator.whitelist(params.slug, chars)

  let res = {};
  try {
    res = await StoryblokService.get('cdn/stories/'+params.slug, {
    })
  }
  catch(error) {
      // log the error
      //console.log("ERROR!!!")
      res = {"data":{"story":{"content":"not found","title":"not found","description":"not found"}}}
  }
  return {
    props: { 
      res: res
    },
    revalidate: 600
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'app' } }
    ],
    fallback: false
  }
}

export default DynamicSlug