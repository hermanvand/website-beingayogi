import styled from 'styled-components'
import React from 'react'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledContainer = styled(Container)`
  // row
  .teaser {
    margin-top: 30px;
    padding: 50px;
    height: 85vh;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: ${(props) => props.url};
  }
  // col
  .headline {
      font-size: 3em;
      color: black;
  };
  .description{
      font-size: 1.5em;
      margin-bottom: 25px;
  };
`

function Teaser({blok}) {
  //console.log(JSON.stringify(blok))

  let playIcon = "play";
  let playText = "bekijk video..."
  if (blok.playlink.cached_url.startsWith("artikel/text")) {
    playIcon = "align-left";
    playText = "lees meer..."
  }

  return (
    <SbEditable content={blok}>
        <StyledContainer url={"url("+blok.image.filename+")"}>
          <Row className="teaser">
            <Col>
              <h2 className='headline'>{blok.headline}</h2>
              <p className='description'>{blok.description}</p>
              <a href={blok.playlink.cached_url}><button type="button" className="btn btn-light"><FontAwesomeIcon icon={playIcon} size="2x"/> {playText}</button></a>
            </Col>
          </Row>
        </StyledContainer>
    </SbEditable>
  )
  
}

export default Teaser