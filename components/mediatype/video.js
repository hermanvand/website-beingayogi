import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col } from "react-bootstrap"
import DynamicComponentRendered from '../DynamicComponentRendered'
import DisplayDate from '../pages/displayDate'
import DisplayTag from '../pages/displayTag'
import DisplayCategory from '../pages/displayCategory'
import DisplayRelated from '../pages/displayRelated'

const StyledContainer = styled(Container)`
  // row
  .contentBody {
    margin-top: 30px;
    padding: 0px;
  }
  // col1
  // video container
  .videoContainer {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  // video iframe
  .videoContainer > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .content > img, .content > p > img {
    width: 100%;
    max-width: 100%;
  }
  // col2
  .right {
    text-align: center;
  }
`

function Video ({ content, tags, thisDate }) {
  //console.log(JSON.stringify(content))
  //console.log(JSON.stringify(tags))
  //console.log(JSON.stringify(thisDate))
  
  return (
  <SbEditable content={content}>
    <StyledContainer>
        <Row className="contentBody">
          <Col className="content">
            <div className="videoContainer">
                  <iframe src={"https://www.youtube.com/embed/" + content.youtube_video_id + "?start=13"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <DisplayDate thisDate={thisDate} />
            <p className="contentIntro">{content.intro}</p>
            {render(content.long_text,
              {
                defaultBlokResolver: (name, props) => (
                  <DynamicComponentRendered component={name} blok={props} key={props._uid} />
                )
              }
            )}
            <DisplayRelated related={content.related} />
          </Col>
          <Col sm={3} className="right">
            <DisplayCategory category={content.categorie} />
            <DisplayTag tags={tags} />
          </Col>
        </Row>
    </StyledContainer>
  </SbEditable>
  )
}

export default Video