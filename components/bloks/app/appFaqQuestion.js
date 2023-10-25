import styled from 'styled-components'
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { render } from 'storyblok-rich-text-react-renderer'

const StyledContainer = styled(Container)`
  .faqQuestion {
    margin-top: 20px;
    padding-left: 10px;
  };
`

function AppFaqQuestion ({blok}) {

  return (
    <StyledContainer {...storyblokEditable(blok)}>
        <Row>
            <Col sm={{span:8,offset:2}} className="faqQuestion">
                <h4>{blok.question}</h4>
            </Col>
        </Row>
        <Row>
            <Col sm={{span:8,offset:2}}>
              {render(blok.answer)}
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default AppFaqQuestion