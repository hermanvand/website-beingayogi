import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"

const StyledContainer = styled(Container)`
  font-size: 0.8em;
  color: #828290;
  padding: 0px;
`

function DisplayDate ({thisDate}) {
  
  let now = new Date(thisDate);
  let displayDate = now.toLocaleDateString("nl-NL", {year:'numeric', month:'long', day:'numeric'})

  return (
    <StyledContainer>
        <Row>
            <Col>
                {displayDate}
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default DisplayDate