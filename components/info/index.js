import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col, Image } from "react-bootstrap"
import DynamicComponentRendered from '../DynamicComponentRendered'
import DynamicComponent from '../DynamicComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledContainer = styled(Container)`
  .cat {
    margin-bottom: 20px;
    padding: 20px;
  }
`

function Info ({ content }) {
 // console.log(JSON.stringify(content))

  return (
  <SbEditable content={content}>
    <StyledContainer className="contentBody">
        <Row>
          <Col sm={2} className="contentLeft">
          <div className="cat">
            <FontAwesomeIcon icon='info' size="4x"/>
          </div>
          </Col>

          <Col sm={8} className="content">
            <h1>{content.title}</h1>

            {(typeof content.intro_image !== 'undefined') &&
            <Image className="contentIntroImage" src={content.intro_image.filename} />}
            <p className="contentIntro">{content.intro}</p>
            {render(content.long_text,
              {
                defaultBlokResolver: (name, props) => (
                  <DynamicComponentRendered component={name} blok={props} key={props._uid} />
                )
              }
            )}
            
            {(typeof content.featurerow !== 'undefined') &&
            content.featurerow.map((nestedBlok) => (
            <DynamicComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </Col>
          
          <Col sm={2} className="contentRight">
          </Col>
        </Row>
    </StyledContainer>
  </SbEditable>
  )
}

export default Info