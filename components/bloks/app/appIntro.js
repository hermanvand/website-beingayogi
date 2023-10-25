import styled from 'styled-components'
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledContainer = styled(Container)`
  // row 1
  .introTitle {
    margin-top: 30px;
  };
  .introDescription {
  };
`

function AppIntro ({blok}) {

  return (
    <StyledContainer className="contentBody" {...storyblokEditable(blok)}>
        <Row>
            <Col sm={{span:8,offset:2}} className="introTitle">
                <h1>{blok.title}</h1>
            </Col>
        </Row>
        <Row>
            <Col sm={{span:8,offset:2}} className="introDescription">
                <p>{blok.description}</p>
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default AppIntro