import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"
import DynamicComponent from '../DynamicComponent'

const StyledContainer = styled(Container)`
  background-color: #AE877D;
  margin-top: 20px;
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
    <SbEditable content={blok}>
          <StyledContainer>
              <Row className="fullWidth">
                  <Col className="featureRowTitle">
                      <p>{blok.title}</p>
                  </Col>
              </Row>
              <Row className="itemList">
                  {blok.columns.map((nestedBlok) => (
                      <Col className="featureItem" key={nestedBlok._uid}>
                          <DynamicComponent blok={nestedBlok} />
                      </Col>
                      )
                  )}
              </Row>
          </StyledContainer>
    </SbEditable>
  )
}

export default FeatureRow