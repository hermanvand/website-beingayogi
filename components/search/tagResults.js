import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col, Button } from "react-bootstrap"

const StyledContainer = styled(Container)`
  .tag {
    margin-right:10px;
    margin-bottom:10px;
  }
`

function TagResult({term, tags}) {
  //console.log(JSON.stringify(term))
  return (
  <SbEditable content={tags}>
        <StyledContainer>
            <Row>
              <Col>
                <p> Er zijn geen resultaten gevonden. Probeer één van deze labels eens...</p>
                { tags.map((tag) => {
                      return (
                        <Button className="tag" key={tag.name} href={"/search?q=tag:" + tag.name} variant="secondary">{tag.name}</Button>
                      )
                      })}
              </Col>
            </Row>
        </StyledContainer>
  </SbEditable>
  )
}

export default TagResult