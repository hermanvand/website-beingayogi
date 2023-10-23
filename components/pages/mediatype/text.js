import styled from 'styled-components'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col } from "react-bootstrap"
import DisplayDate from '../../lib/displayDate'
import DisplayReadingTime from '../../lib/displayReadingTime'
import DisplayTag from '../../lib/displayTag'
import DisplaySubject from '../../lib/displaySubject'
import DisplayCategory from '../../lib/displayCategory'
import DisplayRelated from '../../lib/displayRelated'
import { StoryblokComponent } from '@storyblok/react'

const StyledContainer = styled(Container)`
`

function Text ({content, tags, thisDate}) {
  //console.log(JSON.stringify(content))
  //console.log(JSON.stringify(tags))
  //console.log(JSON.stringify(thisDate))
     
  return (
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
                  defaultBlokResolver: (name, props) => {
                    const blok = { ...props, component: name };
                    return <StoryblokComponent blok={blok} key={props._uid} />;
                  }
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
  )
}

export default Text