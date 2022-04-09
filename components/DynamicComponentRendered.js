import DynamicComponent from './DynamicComponent'

function DynamicComponentRendered ({component, blok}) {
  blok.component = component;
  return <DynamicComponent blok={blok} />
}

export default DynamicComponentRendered