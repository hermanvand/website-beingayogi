import styled from 'styled-components'
import { Container, Row, Col, Button } from "react-bootstrap"

const StyledContainer = styled(Container)`
  color: #828290;
  .line {
    width: 150px;
    margin: auto;
    margin-bottom: 10px;
  }
  .tag {
    margin-right:10px;
    margin-bottom:10px;
  }
`

function DisplayTag ({tags}) {
  
  return (
    <StyledContainer>
        <Row>
            <Col>
                { tags && tags.map((tag) => (
                  <Button className="tag" key={tag} href={"/search?q=label:" + tag} variant="secondary">{tag}</Button>
                ))}
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default DisplayTag