import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col } from "react-bootstrap"
import DynamicComponentRendered from '../../DynamicComponentRendered'
import DisplayDate from '../../lib/displayDate'
import DisplayReadingTime from '../../lib/displayReadingTime'
import DisplayTag from '../../lib/displayTag'
import DisplaySubject from '../../lib/displaySubject'
import DisplayCategory from '../../lib/displayCategory'
import DisplayRelated from '../../lib/displayRelated'

const StyledContainer = styled(Container)`
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
`

function Video ({ content, tags, thisDate }) {
  //console.log(JSON.stringify(content))
  //console.log(JSON.stringify(tags))
  //console.log(JSON.stringify(thisDate))
  
  return (
  <SbEditable content={content}>
    <StyledContainer className="contentBody">
        <Row>
          <Col className="content">
            <div className="videoContainer">
                  <iframe src={"https://www.youtube.com/embed/" + content.youtube_video_id + "?start=13"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <DisplayDate thisDate={thisDate} />
            <DisplayReadingTime content={content.long_text} />
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
          <Col sm={3} className="contentRight">
            <DisplayCategory category={content.categorie} />
            <DisplaySubject subject={content.onderwerp} />
            <DisplayTag tags={tags} />
          </Col>
        </Row>
    </StyledContainer>
  </SbEditable>
  )
}

export default Video