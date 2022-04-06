import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"

const StyledContainer = styled(Container)`
  background-color: #34605f;
  max-width:100%;
  .fullWidth {
      margin-top: 0px;
      margin-left: 0px;
      margin-right: 0px;
      text-align: center;
  } 
  // title row
  .tagline {
    margin-top: 10px;
    padding-left: 0px;
    font-size: 1.6em;
    font-weight: bold;
    color: white;
  };
  .secondline {
    margin-top: 10px;
    padding-left: 0px;
    font-size: 1.2em;
    color: white;
  };
`

function Tagline ({blok}) {

  return (
    <SbEditable content={blok}>
          <StyledContainer>
              <Row className="fullWidth">
                  <Col></Col>
                  <Col sm={8} >
                    <p className="tagline">{blok.tagline}</p>
                    <p className="secondline">{blok.secondline}</p>
                  </Col>
                  <Col></Col>
              </Row>
          </StyledContainer>
    </SbEditable>
  )
}

export default Tagline