import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"
import EmailForm from '../forms/emailForm'

const StyledContainer = styled(Container)`
max-width:100%;
margin: 0px;
padding: 0px;
.fullWidth {
    background-color: #BA9645;
    margin: 0px;
    padding: 0px;
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
.description {
  //background: rgba(255,255,255,0.7);
  margin-top: 20px;
  padding-left: 25%;
  padding-right: 25%;
  text-align: center;
}
.teaser {
  margin-top: 10px;
  margin-left: 0px;
  margin-right: 0px;
  height: 0px;
  padding: 0px;
  padding-bottom: ${(props) => props.hoogte}%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  background-image: ${(props) => props.url};
}
.form {
  background: rgba(255,255,255,0.3);
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 0px;
  margin-right: 0px;
}
`

function Highlight ({blok}) {
  // console.log(JSON.stringify({blok}))

  return (
    <StyledContainer url={"url("+blok.image.filename+")"} hoogte={blok.hoogte}>
      <Row className="fullWidth">
          <Col></Col>
          <Col sm={8} >
            <p className="tagline">{blok.title}</p>
            <p className="secondline">{blok.subtitle}</p>
          </Col>
          <Col></Col>
      </Row>
      <Row>
          <Col>
            <p className='description'>{blok.description}</p>
            <p className='description'>{blok.action}</p>
          </Col>
      </Row>
      <Row className="teaser">
        <Row className="form">
          <Col></Col>
          <Col sm={8}>
            <EmailForm></EmailForm>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </StyledContainer>
  )
}

export default Highlight