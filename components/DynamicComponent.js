import Placeholder from './Placeholder.js'
import Feature from './home/feature'
import FeatureRow from './home/featureRow.js'
import SubjectRow from './home/subjectRow.js'
import Teaser from './home/teaser.js'
import Tagline from './home/tagline.js'
import AndMore from './home/andMore.js'
import Introduction from './home/introduction.js'
import LinkCard from './pages/linkCard'
import TextBox from './pages/textBox'
import Highlight from './pages/highlight'

const Components = {
  'teaser': Teaser,
  'feature': Feature,
  'featureRow': FeatureRow,
  'subjectRow': SubjectRow,
  'tagline': Tagline,
  'andMore': AndMore,
  'introduction': Introduction,
  'linkCard': LinkCard,
  'textbox': TextBox,
  'highlight': Highlight
}

function DynamicComponent ({blok}) {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent