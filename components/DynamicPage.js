import SbEditable from 'storyblok-react'
import DynamicComponent from './DynamicComponent'

function DynamicPage ({ content }) {

  return (
    <SbEditable content={content}>
        {content.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
    </SbEditable>
  )

}

export default DynamicPage