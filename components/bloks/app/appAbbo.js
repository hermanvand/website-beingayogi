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
  .darkBackground {
    background-color: #AE877D;
    margin-bottom: 20px;
  };
  .abboItem {
    padding-top: 20px;
    padding-bottom: 20px;
  };
  .abboPart1 {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    color: white;
  };
  .abboPart2 {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
    color: white;
  };
  .abboIcon {
  };
  .abboText {
    font-size: 0.8em;
  };
  .abboImage {
    height: 150px;
  };
  .abboPrice {
  };
  .abboTagline {
  };
  .abboTitle {
    margin-top: 30px;
    padding-left: 0px;
    font-size: 1.2em;
    text-align: center;
    //color: white;
  };
  .abboDescription {
    padding-left: 0px;
    font-size: 0.8em;
    text-align: center;
    //color: white;
  };
  .abboButton {
    text-align: center;
    color: white;
    padding-bottom: 20px;
  };
`

function AppAbbo ({blok}) {

  return (
    <StyledContainer {...storyblokEditable(blok)}>

        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} className="abboTitle">
                <p>{blok.title}</p>
            </Col>
            <Col></Col>
        </Row>
        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} className="abboDescription">
                <p>{blok.description}</p>
            </Col>
            <Col></Col>
        </Row>
        <Row className="darkBackground">
            <Col className="abboItem">
                <Row>
                    <Col sm={2} className="abboPart1">
                        <p className="abboIcon"><FontAwesomeIcon icon="star" size="2x"/></p>
                        <p className="abboText">{blok.abbo_text}</p>
                    </Col>
                    <Col sm={2}>
                        <Image className="abboImage" src={blok.abbo_image.filename} />
                    </Col>
                    <Col sm={8} className="abboPart2">
                      <p className="abboPrice">{blok.abbo_price}</p>
                      <p className="abboText">{blok.abbo_description}</p>
                      <p className="abboTagline">{blok.abbo_tagline}</p>
                    </Col>
                </Row>
            </Col>       
        </Row>
        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} className="abboDescription">
                <p>{blok.why}</p>
            </Col>
            <Col></Col>
        </Row>
    </StyledContainer>
  )
}

export default AppAbbo