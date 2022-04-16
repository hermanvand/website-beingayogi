import styled from 'styled-components'
import { Container, Row, Col, Button } from "react-bootstrap"

const StyledContainer = styled(Container)`
  .tag {
    margin-right:10px;
    margin-bottom:10px;
  }
  .col {
    margin-top:10px;
  }
`

function TagResult({tags}) {
  return (
    <StyledContainer>
        <Row>
          <Col>
            { tags && tags.map((tag) => {
                  return (
                    <Button className="tag" key={tag.name} href={"/search?q=label:" + tag.name} variant="secondary">{tag.name}</Button>
                  )
                  })}
          </Col>
        </Row>
    </StyledContainer>
  )
}

export default TagResult