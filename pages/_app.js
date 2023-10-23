import '../styles/bootstrap.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAdjust, faInfo, faPlay, faSearch, faExternalLinkAlt, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { AppWrapper } from '../context';
import ErrorBoundary from '../lib/errorBoundary';

// add icons
library.add(faPlay)
library.add(faInfo)
library.add(faSearch)
library.add(faAdjust)
library.add(faExternalLinkAlt)
library.add(faAlignLeft)

// init storyblok
import { storyblokInit, apiPlugin } from "@storyblok/react";

// storyblok components
import Feature from '../components/bloks/home/feature'
import FeatureRow from '../components/bloks/home/featureRow.js'
import SubjectRow from '../components/bloks/home/subjectRow.js'
import Teaser from '../components/bloks/home/teaser.js'
import Tagline from '../components/bloks/home/tagline.js'
import AndMore from '../components/bloks/home/andMore.js'
import Introduction from '../components/bloks/home/introduction.js'
import LinkCard from '../components/bloks/linkCard'
import TextBox from '../components/bloks/textBox'
import Highlight from '../components/bloks/highlight'

const components = {
  feature: Feature,
  featureRow: FeatureRow,
  subjectRow: SubjectRow,
  teaser: Teaser,
  tagline: Tagline,
  andMore: AndMore,
  introduction: Introduction,
  linkCard: LinkCard,
  textbox: TextBox,
  highlight: Highlight
}

const myToken = process.env.STORYBLOK_API_KEY;

storyblokInit({
  accessToken: myToken,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
    https: true,
    cache: {
      clear: 'auto',
      type: 'memory'
    }
  },
  components,
});

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ErrorBoundary>
  )
}

export default MyApp
