import React from 'react'
import StoryblokService from '../../adapters/storyblok-service'
import Layout from "../../components/layout/layout"
import SearchResult from '../../components/search/searchResults'
import TagResult from '../../components/search/tagResults'
import SubjectResult from '../../components/search/subjectResults'
import validator from 'validator';
import getCategoryText from "../../lib/categoryText.js"

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    //console.log(JSON.stringify(props))

    this.state = {
      stories: props.result.data.stories,
      display: props.display,
      term: props.term,
      tags: props.tags.data.tags,
      subjects: props.subjects.data.datasource_entries
    }
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    // validate input
    let q = query.q
    var chars = 'a-zA-Z0-9_:\\-\\s';
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
    let res = "";
    switch (searchType) {
      case "term":
        res = await StoryblokService.get('cdn/stories', {
          "starts_with": "artikel",
          "search_term": term
        })
        break;
      case "tag":
        res = await StoryblokService.get('cdn/stories', {
          "starts_with": "artikel",
          "with_tag" : tag
        })
        break;
      case "categorie":
        res = await StoryblokService.get('cdn/stories', {
          "starts_with": "artikel",
          "filter_query[categorie][in]" : categorie
        })
        break;
      case "onderwerp":
        res = await StoryblokService.get('cdn/stories', {
          "starts_with": "artikel",
          "filter_query[onderwerp][in]" : onderwerp
        })
        break;
    }

    // also get subjects & tags
    // note: these are not always used, this call should be somewhere else for performance
    let subjects = await StoryblokService.get('cdn/datasource_entries', {
      "datasource": "subjects"
    })
    let tags = await StoryblokService.get('cdn/tags')

    // console.log(JSON.stringify(term))
    // console.log(JSON.stringify(res))

    return {
      "display": searchDisplay, "term": searchTerm, "result": res, "subjects": subjects, "tags": tags
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const display = this.state.display
    const term = this.state.term
    const stories = this.state.stories
    const subjects = this.state.subjects
    const tags = this.state.tags

    //console.log(JSON.stringify(tags))
    //console.log(JSON.stringify(subjects))

    return (
      <Layout title='Being A Yogi' description='Welcome to Being A Yogi'>
        <SearchResult display={display} term={term} stories={stories}></SearchResult>
        <SubjectResult subjects={subjects}></SubjectResult>
        {stories && stories == 0 && <TagResult tags={tags}></TagResult>}
      </Layout>
    )
  }
}

export default SearchPage