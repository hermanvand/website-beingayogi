import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"
import { storyblokEditable } from '@storyblok/react'

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
    <StyledContainer {...storyblokEditable(blok)}>
        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} >
              <p className="tagline">{blok.tagline}</p>
              <p className="secondline">{blok.secondline}</p>
            </Col>
            <Col></Col>
        </Row>
    </StyledContainer>
  )
}

export default Tagline