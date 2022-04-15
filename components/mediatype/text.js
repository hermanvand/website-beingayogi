import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col } from "react-bootstrap"
import DynamicComponentRendered from '../DynamicComponentRendered'
import DisplayDate from '../pages/displayDate'
import DisplayTag from '../pages/displayTag'
import DisplaySubject from '../pages/displaySubject'
import DisplayCategory from '../pages/displayCategory'
import DisplayRelated from '../pages/displayRelated'

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