import React from 'react'

// libs
import { getLinksFromStoryBlok, getStoryFromStoryBlok } from '../../lib/storyblokData'

// components
import Layout from "../../components/layout/layout"
import Info from '../../components/pages/info/index'
import NotFound from '../../components/pages/notFound'

// return the info page
function InfoPage( { story }) {
  return (
    <Layout title={story?.content.title} description={story?.content.intro}>
      {(! story) ? (
        <NotFound/> 
      ) : (
        <Info content={story.content} />
      )}
    </Layout>
  )
}

// get data from storyblok
export async function getStaticProps({ params }) {
  // init
  let sbSlug = "info/"+params.slug;
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
    starts_with: "info/"
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
      slug = splittedSlug[1]
      paths.push({ params: { slug: slug } });

    })
  }

  return {
    paths: paths,
    fallback: false,
  }
}

export default InfoPage