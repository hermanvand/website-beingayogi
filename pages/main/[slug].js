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

export async function getStaticProps({ params }) {
  let res = {};
  try {
    res = await StoryblokService.get('cdn/stories/main/'+params.slug, {
      "resolve_relations": "subjectRow.articleList"
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

  let res = await StoryblokService.get("cdn/links/?starts_with=main/")
  let paths = []

  //console.log(JSON.stringify(res))
  Object.keys(res.data.links).forEach((linkKey) => {

    if (res.data.links[linkKey].is_folder) {
      return;
    }

    let slug = res.data.links[linkKey].slug;

    let splittedSlug = slug.split("/");
    slug = splittedSlug[1]
    paths.push({ params: { slug: slug } });

  })

  return {
    paths: paths,
    fallback: false,
  }

}

export default mainPage