import styled from 'styled-components'
import { Container, Row, Col, Button } from "react-bootstrap"

const StyledContainer = styled(Container)`
  .subject {
    margin-right:10px;
    margin-bottom:10px;
  }
  .col {
    margin-top:10px;
  }
`

function SubjectResult({subjects}) {
  return (
    <StyledContainer>
        <Row>
          <Col>
              <p>Zoek artikelen over een andere onderwerp</p>
              { subjects && subjects.map((subject) => {
                    return (
                      <Button className="subject" key={subject.value} href={"/search?q=onderwerp:" + subject.value} variant="success">{subject.name}</Button>
                    )
                    })}
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default SubjectResult