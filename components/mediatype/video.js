import styled, { css } from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col, Button } from "react-bootstrap"
import DynamicComponentRendered from '../DynamicComponentRendered'
import DynamicComponent from '../DynamicComponent'
import DynamicIcon from '../DynamicIcon'

const StyledContainer = styled(Container)`
  // col
  > div > div {
    margin-top: 30px;
    padding: 0px;
  };
  // video container
  > div > div > div.videoContainer {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0px;
    overflow: hidden;
    margin-bottom: 20px;
  };
  // video iframe
  > div > div > div.videoContainer > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  };
  .content {
  }
  .content > img, .content > p > img {
    width: 100%;
    max-width: 100%;
  };
  .content > h1,h2,h3 {
    color: #AE877D;
  };
  .content > h4,h5,h6 {
    color: #BA9645;
  }
  .right {
    text-align: center;
    margin-left: 10px;
  };
  .cat {
    display: inline-block;
    margin-bottom: 20px;
    padding: 20px;
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-bottom-color: ${(props) => props.bordercolor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  div.related {
    margin-top:20px;
    text-align:center;
    color: #828290;
  };
  .line {
    width: 150px;
    margin: auto;
    margin-bottom: 10px;
  }
  .intro {
    margin-left:20px;
    margin-right: 20px;
    font-style: italic;
  }
  .publishedDate {
    font-size: 0.8em;
    color: #828290;
  }
`

function Video ({ content, tags, thisDate }) {
  //console.log(JSON.stringify(content))
  //console.log(JSON.stringify(tags))
  //console.log(JSON.stringify(thisDate))
  
  let borderColor= "#BA9645"
  let iconUrl = "";
  switch (content.categorie) {
    case "fysiek":
      iconUrl = "/main/bewandel-het-yoga-pad";
      borderColor = "#BA9645";
     break;
    case "subtiel":
      iconUrl = "/main/ontdek-jezelf";
      borderColor = "#B76352";
      break;
    case "causaal":
      iconUrl = "/main/vergroot-je-bewustzijn";
      borderColor = "#793540";
      break;
    case "bewustzijn":
      iconUrl = "/main/wees-een-met-het-leven";
      borderColor = "#E9AEC9";
      break;
  }

  let now = new Date(thisDate);
  let displayDate = now.toLocaleDateString("nl-NL", {year:'numeric', month:'long', day:'numeric'})

  return (
  <SbEditable content={content}>
    <StyledContainer bordercolor={ borderColor }>
        <Row>
            <Col>

            </Col>
        </Row>
        <Row>
          <Col className="content">
            <div className="videoContainer">
                  <iframe src={"https://www.youtube.com/embed/" + content.youtube_video_id + "?start=13"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p className="publishedDate">{displayDate}</p>
            <p className="intro">{content.intro}</p>
            {render(content.long_text,
              {
                defaultBlokResolver: (name, props) => (
                  <DynamicComponentRendered component={name} blok={props} key={props._uid} />
                )
              }
            )}
            <div className="related">
                {(typeof content.related !== 'undefined') &&
                <p><hr className="line"/>Heeft relatie met</p>
                }
                {(typeof content.related !== 'undefined') &&
                content.related.map((nestedBlok) => (
                <DynamicComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
              </div>
          </Col>
          <Col sm={2} className="right">
            <div>
              <p>Geeft inzicht in</p>
              <div className="cat">
                <a className="card" href={iconUrl}><DynamicIcon type={content.categorie} /></a>
              </div>
              <div>
                { tags && tags.length > 0 && <p><hr className="line"/>is gelabeld als</p> }
                { tags.map((tag) => (
                  <Button key={tag} href={"/search?q=tag:" + tag} variant="secondary">{tag}</Button>
                ))}
              </div>
            </div>
          </Col>
        </Row>
    </StyledContainer>
  </SbEditable>
  )
}

export default Video