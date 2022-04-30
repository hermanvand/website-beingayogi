import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"

const StyledContainer = styled(Container)`
`

function NotFound ({ content, tags }) {

  return (
  <SbEditable content={content}>
    <StyledContainer className="notfound">
        <Row>
            <Col>
              <p>Mediatype Not Found</p>
            </Col>
        </Row>
    </StyledContainer>
  </SbEditable>
  )
}

export default NotFound