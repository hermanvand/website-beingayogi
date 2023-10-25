import styled from 'styled-components'
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledContainer = styled(Container)`
.faqSubTitle {
    margin-top: 20px;
  };
`

function AppFaqCategory ({blok}) {

  return (
    <StyledContainer {...storyblokEditable(blok)}>
        <Row>
            <Col sm={{span:8,offset:2}} className="faqSubTitle">
                <h2>{blok.category}</h2>
            </Col>
        </Row>
    </StyledContainer>
  )
}

export default AppFaqCategory