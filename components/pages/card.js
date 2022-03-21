import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"
import { render } from "storyblok-rich-text-react-renderer"

const StyledContainer = styled(Container)`
  background-color: #828290;
  color: white;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding: 10px;
  margin-bottom: 20px;
  // margin: 20px;
  // col
  > div > div {
      text-align: center;
  };
  // title
  p.name {
      font-size: 2em;
      font-weight: bold;
      padding: 10px;
  };
`

function Card ({blok}) {
  //console.log(JSON.stringify(blok.link))

  return (
    <SbEditable content={blok}>
        <StyledContainer className="card">
            <Row>
                <Col>
                    <a href={blok.link.cached_url} className="text-decoration-none text-reset">
                    <p className="name">
                        {blok.title}
                    </p>
                    <p>
                        {render(blok.description)}
                    </p>
                    </a>
                </Col>
            </Row>
        </StyledContainer>
    </SbEditable>
  )
}

export default Card