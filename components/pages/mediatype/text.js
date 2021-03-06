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
`

function Text ({content, tags, thisDate}) {
  //console.log(JSON.stringify(content))
  //console.log(JSON.stringify(tags))
  //console.log(JSON.stringify(thisDate))
     
  return (
  <SbEditable content={content} tags={tags}>
    <StyledContainer className="contentBody">
        <Row>
          <Col className="contentLeft">
            <img src={content.image}/>
          </Col>
          <Col sm={6} className="content">
              <h1>{content.title}</h1>
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

export default Text