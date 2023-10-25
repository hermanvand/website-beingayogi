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
  };
  .uspItem {
    padding-top: 20px;
    padding-bottom: 20px;
  };
  .uspPart {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    color: white;
  };
  .uspIcon {
  };
  .uspText {
    font-size: 0.8em;
  };
  .uspImage {
    height: 150px;
  };
  .uspTitle {
    margin-top: 30px;
    padding-left: 0px;
    font-size: 1.2em;
    text-align: center;
    //color: white;
  };
  .uspDescription {
    padding-left: 0px;
    font-size: 0.8em;
    text-align: center;
    //color: white;
  };
  .uspButton {
    text-align: center;
    color: white;
    padding-top: 20px;
  };
`

function AppUsp ({blok}) {

  return (
    <StyledContainer {...storyblokEditable(blok)}>

        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} className="uspTitle">
                <p>{blok.title}</p>
            </Col>
            <Col></Col>
        </Row>
        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} className="uspDescription">
                <p>{blok.description}</p>
            </Col>
            <Col></Col>
        </Row>
        <Row className="darkBackground">
            <Col sm={4} className="uspItem">
                <Row className="flex-nowrap">
                    <Col className="uspPart">
                        <p className="uspIcon"><FontAwesomeIcon icon="star" size="2x"/></p>
                        <p className="uspText">{blok.usp1}</p>
                    </Col>
                    <Col>
                        <Image className="uspImage" src={blok.usp1image.filename} />
                    </Col>
                </Row>
            </Col>
            <Col sm={4} className="uspItem">
                <Row className="flex-nowrap">
                    <Col className="uspPart">
                        <p className="uspIcon"><FontAwesomeIcon icon="star" size="2x"/></p>
                        <p className="uspText">{blok.usp2}</p>
                    </Col>
                    <Col>
                        <Image className="uspImage" src={blok.usp2image.filename} />
                    </Col>
                </Row>
            </Col>
            <Col sm={4} className="uspItem">
                <Row className="flex-nowrap">
                    <Col className="uspPart">
                        <p className="uspIcon"><FontAwesomeIcon icon="star" size="2x"/></p>
                        <p className="uspText">{blok.usp3}</p>
                    </Col>
                    <Col>
                        <Image className="uspImage" src={blok.usp3image.filename} />
                    </Col>
                </Row>
            </Col>            
        </Row>
        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} className="uspButton">
                <Button href={blok.link.cached_url} variant="primary">{blok.linkTitle}</Button>
            </Col>
            <Col></Col>
        </Row>
    </StyledContainer>
  )
}

export default AppUsp