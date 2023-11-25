import '../styles/bootstrap.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAdjust, faInfo, faPlay, faSearch, faExternalLinkAlt, faAlignLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import { AppWrapper } from '../context';
import ErrorBoundary from '../lib/errorBoundary';

// add icons
library.add(faPlay)
library.add(faInfo)
library.add(faSearch)
library.add(faAdjust)
library.add(faExternalLinkAlt)
library.add(faAlignLeft)
library.add(faStar)

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
import AppTagline from '../components/bloks/app/appTagline.js'
import AppUsp from '../components/bloks/app/appUsp.js'
import AppDemo from '../components/bloks/app/appDemo.js'
import AppAbbo from '../components/bloks/app/appAbbo.js'
import AppIntro from '../components/bloks/app/appIntro';
import AppFaqQuestion from '../components/bloks/app/appFaqQuestion';
import AppFaqCategory from '../components/bloks/app/appFaqCategory';
import AppScreenshot from '../components/bloks/app/appScreenshot';
import AppRender from '../components/bloks/app/appRender';

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
  highlight: Highlight,
  appTagline: AppTagline,
  appUsp: AppUsp,
  appDemo: AppDemo,
  appAbbo: AppAbbo,
  appIntro: AppIntro,
  appFaqQuestion: AppFaqQuestion,
  appFaqCategory: AppFaqCategory,
  appScreenshot: AppScreenshot,
  appRender: AppRender,
}

const myToken = process.env.NEXT_PUBLIC_STORYBLOK_API_KEY;

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
