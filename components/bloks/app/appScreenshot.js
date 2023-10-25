import styled from 'styled-components'
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledContainer = styled(Container)`
  // row 1
  .screenshotTitle {
    margin-top: 10px;
  };
  .screenshotDescription {
  };
  .screenshotImage {
    max-width: 350px;
    max-height: 350px;
  };
`

function AppScreenshot ({blok}) {

  return (
    <StyledContainer className="contentBody" {...storyblokEditable(blok)}>
        <Row>
            <Col sm={{span:8,offset:2}} className="screenshotTitle">
                <h4>{blok.title}</h4>
            </Col>
        </Row>
        <Row>
            <Col sm={{span:8,offset:2}} className="screenshotDescription">
                <p>{blok.description}</p>
            </Col>
        </Row>
        <Row>
          <Col sm={{span:8,offset:2}}>
            <Image className="screenshotImage" src={blok.screenshot.filename} />
          </Col>
        </Row>
    </StyledContainer>
  )
}

export default AppScreenshot