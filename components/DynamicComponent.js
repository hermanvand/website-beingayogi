import Placeholder from './Placeholder.js'
import Feature from './home/feature'
import FeatureRow from './home/featureRow.js'
import SubjectRow from './home/subjectRow.js'
import Teaser from './home/teaser.js'
import Tagline from './home/tagline.js'
import Card from './pages/card'
import CardRow from './pages/cardRow'
import TextBox from './pages/textBox'

const Components = {
  'teaser': Teaser,
  'feature': Feature,
  'featureRow': FeatureRow,
  'subjectRow': SubjectRow,
  'card': Card,
  'cardRow': CardRow,
  'tagline': Tagline,
  'textbox': TextBox
}

function DynamicComponent ({blok}) {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent