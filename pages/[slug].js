import React from 'react'
import { StoryblokComponent, useStoryblokState } from "@storyblok/react"
import validator from 'validator';

// libs
import { getStoryFromStoryBlok } from '../lib/storyblokData'

// components
import Layout from "../components/layout/layout"
import NotFound from "../components/pages/notFound"

// return a dynamic storyblok page
function DynamicSlug ({story: initialStory}) {
  const story = useStoryblokState(initialStory);

  return (
    <Layout title={story?.content.title} description={story?.content.intro}>
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
  let sbSlug = params.slug;
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
  return {
    paths: [
      { params: { slug: 'terms' } }
    ],
    fallback: false
  }
}

export default DynamicSlug