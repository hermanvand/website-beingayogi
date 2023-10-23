import React from 'react'
import { StoryblokComponent, useStoryblokState } from "@storyblok/react"

// libs
import { getStoryFromStoryBlok } from '../lib/storyblokData'

// components
import Layout from "../components/layout/layout"

// return the homepage, with storyblok components only
function HomePage ( { story: initialStory } ) {
  const story = useStoryblokState(initialStory);

  return (
    <Layout title='Being A Yogi' description='Welcome to Being A Yogi'>
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
export async function getStaticProps() {
  // init
  let sbSlug = "home";
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

export default HomePage