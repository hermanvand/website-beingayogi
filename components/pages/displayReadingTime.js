import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"

const StyledContainer = styled(Container)`
  font-size: 0.8em;
  color: #828290;
  padding: 0px;
`

function DisplayReadingTime ({content}) {

  // 200 words per minute
  let readingTime = Math.ceil(JSON.stringify(content).split(' ').length / 200);
  let displayReadingTime = "leestijd: " + readingTime + " minuten"

  return (
    <StyledContainer>
        <Row>
            <Col>
                {displayReadingTime}
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default DisplayReadingTime