import { getStoryblokApi } from "@storyblok/react";

// get a story from storyblok, return false if something went wrong
async function getStoryFromStoryBlok(sbSlug, sbParams) {
  // init
  let res = {};

  if (process.env.STORYBLOK_DEV_MODE === "true") {
    sbParams.version = "draft";
  }

  const storyblokApi = getStoryblokApi();
  try {
    res = await storyblokApi.get("cdn/stories/"+sbSlug, sbParams);
  }
  catch(error) {
      // log the error
      if (process.env.STORYBLOK_DEV_MODE === "true") {
        console.log("Error in stories from " + sbSlug + ": " + error);
      }
  }

  if (res.data && res.data.story) {
    return res.data.story;
  }
  else {
    return false;
  }
}

// get list from storyblok, return false if something went wrong
async function getList(sbList, sbSlug, sbParams) {
    // init
    let res = {};

    if (process.env.STORYBLOK_DEV_MODE === "true") {
        sbParams.version = "draft";
    }

    const storyblokApi = getStoryblokApi();
    try {
        res = await storyblokApi.get(sbSlug, sbParams)
    }
    catch(error) {
        // log the error
        if (process.env.STORYBLOK_DEV_MODE === "true") {
            console.log("Error in list of " + sbList + ": " + error);
        }        
    }

    if (res.data && res.data[sbList]) {
        return res.data[sbList];
    }
    else {
        return false;
    }
}

// get stories
async function getStoriesFromStoryBlok(sbParams) {
    return getList("stories", "cdn/stories", sbParams);
}

// get links
async function getLinksFromStoryBlok(sbParams) {
    return getList("links", "cdn/links", sbParams);
}

// get links
async function getDatasourceEntriesFromStoryBlok(sbParams) {
    return getList("datasource_entries", "cdn/datasource_entries", sbParams);
}

// get links
async function getTagsFromStoryBlok(sbParams) {
    return getList("tags", "cdn/tags", sbParams);
}

export { getStoryFromStoryBlok, getStoriesFromStoryBlok, getLinksFromStoryBlok, getDatasourceEntriesFromStoryBlok, getTagsFromStoryBlok }