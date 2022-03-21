import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col, Image } from "react-bootstrap"
import DynamicComponent from '../DynamicComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledContainer = styled(Container)`
  // row
  > div {
    margin-top: 30px;
    padding: 0px;
  };
  // col 1
  > div > div.left {
    text-align: center;
    .cat {
      text-align: center;
      margin-bottom: 20px;
      padding: 20px;
      // border-bottom-style: solid;
      // border-bottom-width: 10px;
      // border-bottom-color: rgba(1, 85, 154, 1.0);
      // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

  };
  // col 2
  > div > div.content {
    .introImage {
      float: right;
      width: 200px;
      padding: 10px;
    }
  };
  > div > div.content > h1,h2,h3 {
    color: #AE877D;
  };
  // col 3
  > div > div.right {
  };
  #myTab {
    li > a.active {
      background-color: grey;
      color: white;
    }
    li > a {
      color: grey;
    }
  }
`

function Info ({ content }) {
 // console.log(JSON.stringify(content))

  return (
  <SbEditable content={content}>
    <StyledContainer className="text">
        <Row>
          <Col sm={2} className="left">
          <div className="cat">
            <FontAwesomeIcon icon='info' size="4x"/>
          </div>
          </Col>
          <Col sm={8} className="content">
            <h1>{content.title}</h1>
            <div className="storyblok-richtext">
              {(typeof content.intro_image !== 'undefined') &&
              <Image className="introImage" src={content.intro_image.filename} />}
              {content.intro}
            </div>

            <div className="cardRow">
              {(typeof content.cardrow !== 'undefined') &&
              content.cardrow.map((nestedBlok) => (
              <DynamicComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
            <br/>

            <div className="storyblok-richtext">
              {render(content.long_text)}
            </div>
            
            <div className="feature">
              {(typeof content.featurerow !== 'undefined') &&
              content.featurerow.map((nestedBlok) => (
              <DynamicComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          </Col>
          <Col sm={2} className="right">
          </Col>
        </Row>
    </StyledContainer>
  </SbEditable>
  )
}

export default Info