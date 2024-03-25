import styled from 'styled-components'
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { storyblokEditable } from '@storyblok/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledContainer = styled(Container)`
  max-width:100%;
  // row 1
  .fullWidth {
      margin-left: 0px;
      margin-right: 0px;
      padding-left: 20px;
      font-size: 1.2em;
  }; 
  .demoTitle {
    margin-top: 30px;
    padding-left: 0px;
    font-size: 1.2em;
    text-align: center;
    //color: white;
  };
  .demoDescription {
    padding-left: 0px;
    font-size: 0.8em;
    text-align: center;
    //color: white;
  };
  // video container
  .videoContainer {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  // video iframe
  .videoContainer > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

function AppDemo ({blok}) {

  return (
    <StyledContainer {...storyblokEditable(blok)}>

        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} className="demoTitle">
                <p>{blok.title}</p>
            </Col>
            <Col></Col>
        </Row>
        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} className="demoDescription">
                <p>{blok.description}</p>
            </Col>
            <Col></Col>
        </Row>
        <Row>
        <Col></Col>
          <Col sm={8}>
            {(blok.youtube_video_id) &&
            <div className="videoContainer">
              <iframe src={"https://www.youtube.com/embed/" + blok.youtube_video_id + "?start=13"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            }
          </Col>
          <Col></Col>
        </Row>
        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} className="demoDescription">
                <p>{blok.why}</p>
            </Col>
            <Col></Col>
        </Row>
    </StyledContainer>
  )
}

export default AppDemo