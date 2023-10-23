import React from 'react'

// libs
import { getLinksFromStoryBlok, getStoryFromStoryBlok } from '../../../lib/storyblokData'

// components
import Layout from "../../../components/layout/layout"
import Text from '../../../components/pages/mediatype/text'
import Video from '../../../components/pages/mediatype/video'
import NotFound from '../../../components/pages/notFound'

// return an article
function ArticlePage( { story }) {

  let loadPage = <NotFound/>
  if (story) {
    switch (story.content.component) {
      case "textPage":
        loadPage = <Text content={story.content} tags={story.tag_list} thisDate={story.published_at}/>
        break;
      case "videoPage":
        loadPage = <Video content={story.content}  tags={story.tag_list} thisDate={story.published_at}/>
        break;
    }
  }

  return (
    <Layout title={story?.content.title} description={story?.content.intro}>
      {loadPage}
    </Layout>
  )
}

// get data from storyblok
export async function getStaticProps({ params }) {
  // init
  let sbSlug = "artikel/"+params.mediatype+'/'+params.slug;
  let sbParams = {
    "resolve_relations": "subjectRow.articleList"
  };

  let story = await getStoryFromStoryBlok(sbSlug, sbParams);

  return {
    props: { 
      story: story
    },
    revalidate: 600
  }
}

//list the slugs to fetch
export async function getStaticPaths() {
  let sbParams = {
    starts_with: "artikel/"
  };

  let links = await getLinksFromStoryBlok(sbParams);

  let paths = []

  if (links) {
    Object.keys(links).forEach((linkKey) => {

      if (links[linkKey].is_folder) {
        return;
      }

      let slug = links[linkKey].slug;

      let splittedSlug = slug.split("/");
      let mediatype = splittedSlug[1]
      slug = splittedSlug[2]
      paths.push({ params: { mediatype: mediatype, slug: slug } });

    })
  }

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export default ArticlePage