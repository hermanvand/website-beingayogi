import styled from 'styled-components'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col, Button } from "react-bootstrap"
import DynamicIcon from '../../DynamicIcon'
import DisplayRelated from '../../lib/displayRelated'
import DisplayReadingTime from '../../lib/displayReadingTime'
import DisplayCategoryAll from '../../lib/displayCategoryAll'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

const StyledContainer = styled(Container)`
  .cat {
    margin-bottom: 20px;
    padding: 20px;
  }
`

function Main ({ content }) {
  //console.log(JSON.stringify(content))

  return (
    <StyledContainer className="contentBody" {...storyblokEditable(content)}>
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
                  defaultBlokResolver: (name, props) => {
                    const blok = { ...props, component: name };
                    return <StoryblokComponent blok={blok} key={props._uid} />;
                  }
                }
              )}

              <DisplayRelated related={content.related} />
          </Col>

          <Col sm={2} className="contentRight">
                <DisplayCategoryAll></DisplayCategoryAll>
          </Col>
        </Row>
    </StyledContainer>
  )
}

export default Main