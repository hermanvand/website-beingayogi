import styled from 'styled-components'
import React from 'react'
import SbEditable from 'storyblok-react'
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledContainer = styled(Container)`
  // row
  //height: 85vh;
  .teaser {
    height: 0px;
    margin-top: 20px;
    padding-top: 0px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: ${(props) => props.hoogte}%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    background-image: ${(props) => props.url};
  }
  // col
  .headline {
      margin-top: 10px;
      font-size: 3em;
      color: black;
  };
  .description {
      font-size: 1.5em;
      margin-bottom: 20px;
  };

  //mobile
  @media (max-width: 575.98px) {
    .headline {
      font-size: 1.5em;
    }
    .description {
      font-size: 1em;
    }
    .fa-2x {
      font-size: 1em;
    }
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
        <StyledContainer url={"url("+blok.image.filename+")"} hoogte={blok.hoogte}>
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