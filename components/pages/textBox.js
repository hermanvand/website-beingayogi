import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"
import { render } from "storyblok-rich-text-react-renderer"

const StyledContainer = styled(Container)`
  border-right-style: solid;
  border-right-width: 10px;
  border-right-color: #34605f;
  margin-right: 0px;
  margin-bottom: 20px;
  text-align: right;
  font-size: 1.2em;
  font-style: italic;
  max-width: 75%;
`

function TextBox ({blok}) {
  //console.log(JSON.stringify(blok.link))

  return (
    <SbEditable content={blok}>
        <StyledContainer>
            <Row>
                <Col>
                    <p>
                        {render(blok.text)}
                    </p>
                </Col>
            </Row>
        </StyledContainer>
    </SbEditable>
  )
}

export default TextBox