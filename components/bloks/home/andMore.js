import styled from 'styled-components'
import { Container, Row, Col, Button } from "react-bootstrap"

const StyledContainer = styled(Container)`
  max-width:100%;
  .fullWidth {
      margin-top: 0px;
      margin-left: 0px;
      margin-right: 0px;
      text-align: center;
  } 
  // title row
  .firstline {
    margin-top: 20px;
    padding-left: 0px;
    font-size: 1.4em;
    font-weight: bold;
  };
  .secondline {
    margin-top: 10px;
    padding-left: 0px;
    font-size: 1.2em;
    color: white;
  };
`

function AndMore ({blok}) {
  //console.log(JSON.stringify(blok))

  return (
    <StyledContainer>
        <Row className="fullWidth">
            <Col></Col>
            <Col sm={8} >
              <p className="firstline">{blok.name}</p>
              <p className="secondline">                              
                <Button href={blok.link.cached_url} variant="primary">{blok.linkTitle}</Button>
              </p>
            </Col>
            <Col></Col>
        </Row>
    </StyledContainer>
  )
}

export default AndMore