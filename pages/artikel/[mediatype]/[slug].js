import React from 'react'
import StoryblokService from '../../../adapters/storyblok-service'
import Layout from "../../../components/layout/layout"
import Text from '../../../components/pages/mediatype/text'
import Video from '../../../components/pages/mediatype/video'
import NotFound from '../../../components/pages/notFound'

class ArticlePage extends React.Component {
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
    //console.log(JSON.stringify(this.state.story))

    let loadPage
    if (contentOfStory == "not found") {
      loadPage = <NotFound></NotFound>
    }
    else {
      const tagList = this.state.story.tag_list
      //const thisDate = this.state.story.created_at
      const thisDate = this.state.story.published_at

      switch (contentOfStory.component) {
        case "textPage":
          loadPage = <Text content={contentOfStory} tags={tagList} thisDate={thisDate}/>
          break;
        case "videoPage":
          loadPage = <Video content={contentOfStory}  tags={tagList} thisDate={thisDate}/>
          break;
        default:
          loadPage = <NotFound/>
          break;
      }
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
    res = await StoryblokService.get('cdn/stories/artikel/'+params.mediatype+'/'+params.slug, {
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

  let res = await StoryblokService.get("cdn/links/?starts_with=artikel/")
  let paths = []

  //console.log(JSON.stringify(res))
  Object.keys(res.data.links).forEach((linkKey) => {

    if (res.data.links[linkKey].is_folder) {
      return;
    }

    let slug = res.data.links[linkKey].slug;

    let splittedSlug = slug.split("/");
    let mediatype = splittedSlug[1]
    slug = splittedSlug[2]
    paths.push({ params: { mediatype: mediatype, slug: slug } });

  })

  return {
    paths: paths,
    fallback: 'blocking',
  }

}

export default ArticlePage