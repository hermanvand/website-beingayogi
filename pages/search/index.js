import React from 'react'
import validator from 'validator';

// libs
import getCategoryText from "../../lib/categoryText.js"
import { getDatasourceEntriesFromStoryBlok, getStoriesFromStoryBlok, getTagsFromStoryBlok } from '../../lib/storyblokData.js';

// components
import Layout from "../../components/layout/layout"
import SearchResult from '../../components/pages/search/searchResults'
import TagResult from '../../components/pages/search/tagResults'
import SubjectResult from '../../components/pages/search/subjectResults'
import NotFound from '../../components/pages/notFound'

// return a search page
function SearchPage ( { result }) {
  return (
    <Layout title='Being A Yogi' description='Welcome to Being A Yogi'>
      {(! result.stories) ? (
        <NotFound/> 
      ) : (
        <main>
          <SearchResult display={result.display} term={result.term} stories={result.stories}></SearchResult>
          <SubjectResult subjects={result.subjects}></SubjectResult>
          {result.stories == 0 && <TagResult tags={result.tags}></TagResult>}
        </main>
      )}
    </Layout>
  )
}

// get data from storyblok
export async function getServerSideProps({ query }) {

  // validate input
  let q = query.q
  var chars = 'a-zA-Z0-9_.~:\\-\\s';
  let term = validator.whitelist(q, chars)
  //console.log(q)
  //console.log(term)

  // what to look for?
  let searchType = "term";
  let searchTerm = term;
  let searchDisplay = "zoeken naar";

  // search by storyblok tags
  let tag = "";
  if (term.startsWith("label:")) {
    tag = term.substring(6);
    searchType = "tag";
    searchTerm = tag;
    searchDisplay = "het onderwerp";
  }

  // search by own categorie or onderwerp
  let categorie = "";
  if (term.startsWith("inzicht:")) {
    categorie = term.substring(8);
    searchType = "categorie";
    searchTerm = getCategoryText(categorie);
    searchDisplay = "het inzicht";
  }
  let onderwerp = "";
  if (term.startsWith("onderwerp:")) {
    onderwerp = term.substring(10);
    searchType = "onderwerp";
    searchTerm = onderwerp;
    searchDisplay = "het onderwerp";
  }

  // search for results
  // init
  let sbParams = {};
  if (process.env.STORYBLOK_DEV_MODE === "true") {
    sbParams.version = "draft";
  }
  switch (searchType) {
    case "term":
      sbParams.starts_with = "artikel";
      sbParams.search_term = term;
      break;
    case "tag":
      sbParams.starts_with = "artikel";
      sbParams.with_tag = tag;
      break;
    case "categorie":
      sbParams.starts_with = "artikel";
      sbParams["filter_query[categorie][in]"] = categorie;
      break;
    case "onderwerp":
      sbParams.starts_with = "artikel";
      sbParams["filter_query[onderwerp][in]"] = onderwerp;
      break;
  }

  // go
  let stories = await getStoriesFromStoryBlok(sbParams);

  // also get subjects & tags
  // note: these are not always used, this call should be somewhere else for performance
  let subjects = await getDatasourceEntriesFromStoryBlok({"datasource": "subjects"})
  let tags = await getTagsFromStoryBlok({})

  return {
    props: {
      result: {
        "display": searchDisplay,
        "term": searchTerm,
        "stories": stories,
        "subjects": subjects,
        "tags": tags,
      }
    }
  }
}

export default SearchPage