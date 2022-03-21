import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import StoryblokService from '../../adapters/storyblok-service'
import Layout from "../../components/layout/layout"
import SearchResult from '../../components/search/searchResults'
import TagResult from '../../components/search/tagResults'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    //console.log(JSON.stringify(props))

    this.state = {
      stories: props.result.data.stories,
      term: props.term,
      tags: props.tags.data.tags
    }
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    let searchType = "term";
    let term = query.q

    // search by storyblok tags
    let tag = "";
    if (term.startsWith("tag:")) {
      searchType = "tag";
      tag = term.substring(4);
    }

    // search by own categorie or onderwerp
    let categorie = "";
    if (term.startsWith("categorie:")) {
      searchType = "categorie";
      categorie = term.substring(10);
    }
    let onderwerp = "";
    if (term.startsWith("onderwerp:")) {
      searchType = "onderwerp";
      onderwerp = term.substring(10);
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

    // also get tags
    // note: these tags are not always used, this call should be somewhere else for performance
    let tags = await StoryblokService.get('cdn/tags')

    // console.log(JSON.stringify(term))
    // console.log(JSON.stringify(res))

    return {
      "term": term, "result": res, "tags": tags
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const term = this.state.term
    const stories = this.state.stories
    const tags = this.state.tags

    //console.log(JSON.stringify(tags))

    return (
      <Layout title='Being A Yogi' description='Welcome to Being A Yogi'>
        <SearchResult term={term} stories={stories}>
        </SearchResult>
        {stories && stories == 0 && <TagResult term={term} tags={tags}></TagResult>}
      </Layout>
    )
  }
}

export default SearchPage