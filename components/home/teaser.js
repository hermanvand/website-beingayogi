import styled, { css } from 'styled-components'
import React from 'react'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const StyledContainer = styled(Container)`
  // col
  > div > div {
    margin-top: 30px;
    padding: 50px;
    height: 85vh;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: ${(props) => props.url};
  }
  // title
  > div > div > h2 {
      font-size: 5em;
  };
  // description
  > div > div > p {
      font-size: 2em;
      margin-bottom: 25px;
  };
`

function Teaser({blok}) {
  //console.log(JSON.stringify(blok))

  return (
    <SbEditable content={blok}>
        <StyledContainer className="teaser" url={"url("+blok.image.filename+")"}>
          <Row>
            <Col>
              <h2>{blok.headline}</h2>
              <p>{blok.description}</p>
              <Link href={blok.playlink.cached_url}>
                <a><button type="button" className="btn btn-light"><FontAwesomeIcon icon='play' size="2x"/> details</button></a>
              </Link>
            </Col>
          </Row>
        </StyledContainer>
    </SbEditable>
  )
  
}

export default Teaser