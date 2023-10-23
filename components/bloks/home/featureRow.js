import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"
import { StoryblokComponent } from '@storyblok/react'

const StyledContainer = styled(Container)`
  background-color: #AE877D;
  max-width:100%;
  // row 1
  .fullWidth {
      margin-left: 0px;
      margin-right: 0px;
      padding-left: 20px;
      font-size: 1.2em;
  } 
  .featureRowTitle {
    margin-top: 30px;
    padding-left: 0px;
    font-size: 1.2em;
    color: white;
  };
  .featureRowDescription {
    padding-left: 0px;
    font-size: 0.8em;
    color: white;
  };
 // row 2
  .itemList {
    padding: 20px;
  }
  .featureItem {
    margin-bottom: 10px;
    min-width: 150px;
  }
`

function FeatureRow ({blok}) {

  return (
    <StyledContainer>
        <Row className="fullWidth">
            <Col className="featureRowTitle">
                <p>{blok.title}</p>
            </Col>
        </Row>
        <Row className="fullWidth">
            <Col className="featureRowDescription">
                <p>{blok.description}</p>
            </Col>
        </Row>
        <Row className="itemList">
            {blok.columns.map((nestedBlok) => (
                <Col className="featureItem" key={nestedBlok._uid}>
                    <StoryblokComponent blok={nestedBlok} />
                </Col>
                )
            )}
        </Row>
    </StyledContainer>
  )
}

export default FeatureRow