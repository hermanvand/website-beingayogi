import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"
import { storyblokEditable } from '@storyblok/react'
import EmailForm from '../../forms/emailForm'

const StyledContainer = styled(Container)`
  background-color: #BA9645;
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
  .form {
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }
`

function AppTagline ({blok}) {

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
        <Row className="form">
          <Col></Col>
          <Col sm={8}>
            <EmailForm></EmailForm>
          </Col>
          <Col></Col>
        </Row>
    </StyledContainer>
  )
}

export default AppTagline