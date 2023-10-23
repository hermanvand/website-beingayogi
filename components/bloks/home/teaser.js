import styled from 'styled-components'
import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storyblokEditable } from '@storyblok/react'

const StyledContainer = styled(Container)`
  // row
  .teaser {
    height: 0px;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: ${(props) => props.hoogte}%;
    background-repeat: no-repeat;
    background-size: 90%;
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
    <StyledContainer url={"url("+blok.image.filename+")"} hoogte={blok.hoogte} {...storyblokEditable(blok)}>
      <Row className="teaser">
        <Col>
          <h2 className='headline'>{blok.headline}</h2>
          <p className='description'>{blok.description}</p>
          <a href={blok.playlink.cached_url}><button type="button" className="btn btn-light"><FontAwesomeIcon icon={playIcon} size="2x"/> {playText}</button></a>
        </Col>
      </Row>
    </StyledContainer>
  )
  
}

export default Teaser