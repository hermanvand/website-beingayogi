//import '../styles/globals.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/bootstrap.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAdjust, faInfo, faPlay, faSearch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { AppWrapper } from '../context';
import link from 'next/link'

// add icons
library.add(faPlay)
library.add(faInfo)
library.add(faSearch)
library.add(faAdjust)
library.add(faExternalLinkAlt)

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
