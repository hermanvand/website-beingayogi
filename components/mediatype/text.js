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
  };
  // col 1
  .left > img {
    width: 100%;
  };
  // col 2
  .content > img, .content > p > img {
    width: 100%;
    max-width: 100%;
  };
  // col 3
  .right {
    text-align: center;
  };
`

function Text ({content, tags, thisDate}) {
  //console.log(JSON.stringify(content))
  //console.log(JSON.stringify(tags))
  //console.log(JSON.stringify(thisDate))
  
  return (
  <SbEditable content={content} tags={tags}>
    <StyledContainer>
        <Row className="contentBody">
          <Col className="left">
            <img src={content.image}/>
          </Col>
          <Col sm={6} className="content">
              <h1>{content.title}</h1>
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

export default Text