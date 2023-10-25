import React from 'react'
import { StoryblokComponent, useStoryblokState } from "@storyblok/react"

// libs
import { getLinksFromStoryBlok, getStoryFromStoryBlok } from '../../lib/storyblokData'

// components
import Layout from "../../components/layout/layout"
import NotFound from "../../components/pages/notFound"

// return a dynamic storyblok page for the app
function AppDynamicSlug ({story: initialStory}) {
  const story = useStoryblokState(initialStory);

  return (
    <Layout title={story.content?.title} description={story.content?.intro}>
      {(! story) ? (
        <NotFound/> 
      ) : (
        story.content.body.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      )}
    </Layout>
  )
}

// get data from storyblok
export async function getStaticProps({ params }) {

  // console.log(JSON.stringify(params))
  // var chars = 'a-zA-Z0-9_.~:\\-\\s';
  // params.slug = validator.whitelist(params.slug, chars)
  
  // init
  let sbSlug = "appje/"+params.slug;
  let sbParams = {
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
      starts_with: "appje/"
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

export default AppDynamicSlug