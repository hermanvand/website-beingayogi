import Placeholder from './Placeholder.js'
import Feature from './bloks/home/feature'
import FeatureRow from './bloks/home/featureRow.js'
import SubjectRow from './bloks/home/subjectRow.js'
import Teaser from './bloks/home/teaser.js'
import Tagline from './bloks/home/tagline.js'
import AndMore from './bloks/home/andMore.js'
import Introduction from './bloks/home/introduction.js'
import LinkCard from './bloks/linkCard'
import TextBox from './bloks/textBox'
import Highlight from './bloks/highlight'

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