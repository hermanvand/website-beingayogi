//import '../styles/globals.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
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
