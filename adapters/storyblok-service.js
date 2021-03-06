import StoryblokClient from 'storyblok-js-client'

class StoryblokService {
  constructor() {
    this.devMode = process.env.STORYBLOK_DEV_MODE === "true"
    this.token = process.env.STORYBLOK_API_KEY
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })

    this.query = {}
  }

  getCacheVersion() {
    return this.client.cacheVersion
  }

  // ask Storyblok's Content API for content of story
  get(slug, params) {
    params = params || {}

    // console.log(JSON.stringify(params))

    //if (this.getQuery('_storyblok') || this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
    if (this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
      params.version = 'draft'
    }

    if (typeof window !== 'undefined' && typeof window.StoryblokCacheVersion !== 'undefined') {
      params.cv = window.StoryblokCacheVersion
    }

    // for production, make sure the CDN cache is cleared after 'revalidate'
    // this could be in a file, based on a storyblok webhook...
    if (!this.devMode) {
      let now = new Date();
      params.cv = now.toISOString();
    }
 
    // test cache - cacheVersion remains the same....
    //console.log("###")
    //console.log(JSON.stringify(now))
    //console.log(JSON.stringify(slug))
    //console.log(JSON.stringify(params))
    //console.log(JSON.stringify(this.getCacheVersion()))

    return this.client.get(slug, params)
  }

  // initialize the connection between Storyblok & Next.js in Visual Editor
  initEditor(reactComponent) {
    if (window.storyblok) {
      window.storyblok.init()

      // reload on Next.js page on save or publish event in Storyblok Visual Editor
      window.storyblok.on(['change', 'published'], () => location.reload(true))

      // Update state.story on input in Visual Editor
      // this will alter the state and replaces the current story with a current raw story object and resolve relations
      window.storyblok.on('input', (event) => {
        if (event.story.content._uid === reactComponent.state.story.content._uid) {
          event.story.content = window.storyblok.addComments(event.story.content, event.story.id)
          window.storyblok.resolveRelations(event.story, ['featured-articles.articles'], () => {
            reactComponent.setState({
              story: event.story
            })
          })
        }
      })
    }
  }

  setQuery(query) {
    this.query = query
  }

  getQuery(param) {
    return this.query[param]
  }

  bridge() {
    //if (!this.getQuery('_storyblok') && !this.devMode) {
    if (!this.devMode) {
      return ''
    }
    return (<script src={'//app.storyblok.com/f/storyblok-latest.js?t=' + this.token}></script>)
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance