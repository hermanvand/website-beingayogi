import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col, Button } from "react-bootstrap"
import DynamicComponentRendered from '../DynamicComponentRendered'
import DynamicIcon from '../DynamicIcon'
import DisplayRelated from '../lib/displayRelated'
import DisplayReadingTime from '../lib/displayReadingTime'
import DisplayCategoryAll from '../lib/displayCategoryAll'

const StyledContainer = styled(Container)`
  .cat {
    margin-bottom: 20px;
    padding: 20px;
  }
`

function Main ({ content }) {
  //console.log(JSON.stringify(content))

  return (
  <SbEditable content={content}>
    <StyledContainer className="contentBody">
        <Row>
          <Col sm={2} className="contentLeft">
            <div className="cat">
              <DynamicIcon type={content.categorie} />
            </div>
            <p>
              <Button href={"/search?q=inzicht%3A" + content.categorie} variant="primary">Artikelen over dit inzicht</Button>
            </p>
          </Col>

          <Col sm={8} className="content">
              <h1>{content.title}</h1>
              <DisplayReadingTime content={content.long_text} />
              <p></p>
              {render(content.long_text,
                {
                  defaultBlokResolver: (name, props) => (
                    <DynamicComponentRendered component={name} blok={props} key={props._uid} />
                  )
                }
              )}

              <DisplayRelated related={content.related} />
          </Col>

          <Col sm={2} className="contentRight">
                <DisplayCategoryAll></DisplayCategoryAll>
          </Col>
        </Row>
    </StyledContainer>
  </SbEditable>
  )
}

export default Main