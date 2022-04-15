import styled from 'styled-components'
import { Container, Row, Col, Button } from "react-bootstrap"

const StyledContainer = styled(Container)`
  color: #828290;
  .line {
    width: 150px;
    margin: auto;
    margin-bottom: 10px;
  }
  .subject {
    margin-right:10px;
    margin-bottom:10px;
  }
`

function DisplaySubject ({subject}) {
  
  return (
    <StyledContainer>
        <Row>
            <Col>
                { subject && 
                <div>
                  <p><hr className="line"/>Onderwerp</p>
                  <Button className="subject" href={"/search?q=onderwerp:" + subject} variant="success">{subject}</Button>
                </div>
                }
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default DisplaySubject