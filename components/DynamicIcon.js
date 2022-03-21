import React from 'react'
import Fysiek from './icons/fysiek'
import Subtiel from './icons/subtiel'
import Causaal from './icons/causaal'
import Bewustzijn from './icons/bewustzijn'

const Components = {
  'fysiek': Fysiek,
  'subtiel': Subtiel,
  'causaal': Causaal,
  'bewustzijn': Bewustzijn
}

function DynamicIcon ({ type }) {
  if (typeof Components[type] !== 'undefined') {
    const Component = Components[type]
    return <Component />
  }
  return null
}

export default DynamicIcon