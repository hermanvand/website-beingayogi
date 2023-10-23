import React from 'react'
import { useStoryblokState } from '@storyblok/react';

// libs
import { getStoryFromStoryBlok } from '../../lib/storyblokData';

// components
import Layout from "../../components/layout/layout"
import Contact from '../../components/pages/contact'
import NotFound from '../../components/pages/notFound'

// return the contact page
function ContactPage ( { story: initialStory } ) {
  const story = useStoryblokState(initialStory);

  return (
    <Layout title={story?.content.title} description={story?.content.intro}>
      {(! story) ? (
        <NotFound/> 
      ) : (
        <Contact content={story.content} />
      )}
    </Layout>
  )
}

// get data from storyblok
export async function getStaticProps() {
  // init
  let sbSlug = "contact";
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

export default ContactPage