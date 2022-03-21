import styled, { css } from 'styled-components'
import StoryblokService from '../../adapters/storyblok-service'

// Head, Header & Footer are main components of a page
import Head from "./head"
import Header from "./header"
import Footer from "./footer"
import View from "./view"

// View can be used for styling of the viewport, light or dark mode for example
//const View = styled.div`
//    background-color: white;
//`

function Layout ({ children, title, description }) {
  return (
    <View className={children.className}>
      <Head title={title} description={description}/>
      <Header />
      {children}
      <Footer />
      {StoryblokService.bridge()}
    </View>
  )
}

export default Layout