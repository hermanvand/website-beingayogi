import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"

const StyledContainer = styled(Container)`
  margin-top: 20px;
  padding: 20px;
  .introductionTitle {
    padding-left: 0px;
    font-size: 1.2em;
  };
  .introductionDescription {
    padding-left: 0px;
  };
`

function Introduction ({blok}) {
  //console.log(JSON.stringify(blok.link))

  return (
    <SbEditable content={blok}>
        <StyledContainer>
          <Row>
              <Col className="introductionTitle">
                  <p>{blok.title}</p>
              </Col>
          </Row>
          <Row>
              <Col className="introductionDescription">
                  <p>{blok.description}</p>
              </Col>
          </Row>
        </StyledContainer>
    </SbEditable>
  )
}

export default Introduction