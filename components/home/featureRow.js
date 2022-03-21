import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"
import DynamicComponent from '../DynamicComponent'

const StyledContainer = styled(Container)`
  background-color: #AE877D;
  margin-top: 20px;
  max-width:100%;
  .fullWidth {
      margin-left: 0px;
      margin-right: 0px;
  } 
  // title row
  > div > div.title {
    margin-top: 30px;
    padding-left: 0px;
    font-size: 1.2em;
    color: white;
  };
  > div.itemList {
    padding: 20px;
  };

`

function FeatureRow ({blok}) {

  return (
    <SbEditable content={blok}>
          <StyledContainer className="featureRow">
              <Row className="fullWidth">
                  <Col className="title">
                      <p>{blok.title}</p>
                  </Col>
              </Row>
              <Row className="itemList">
                  {blok.columns.map((nestedBlok) => (
                      <Col key={nestedBlok._uid}>
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