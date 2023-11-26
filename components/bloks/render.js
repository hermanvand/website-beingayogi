import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { render } from "storyblok-rich-text-react-renderer"

const StyledContainer = styled(Container)`
.longText {
  margin-top: 30px;
};
`

function Render ({blok}) {

  return (
    <StyledContainer {...storyblokEditable(blok)}>
        <Row>
            <Col sm={{span:8,offset:2}} className="longText">
              {render(blok.long_text,
                {
                  defaultBlokResolver: (name, props) => {
                    const blok = { ...props, component: name };
                    return <StoryblokComponent blok={blok} key={props._uid} />;
                  }
                }
              )}
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default Render