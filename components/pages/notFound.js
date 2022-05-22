import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"

const StyledContainer = styled(Container)`
.title {
  padding-top: 20px;
  font-size: 1.2em;
  color: #AE877D;
};
`

function NotFound () {
  
  return (
    <StyledContainer>
        <Row>
            <Col className="title">
                <p>Deze pagina is niet gevonden, probeer iets anders.</p>
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default NotFound