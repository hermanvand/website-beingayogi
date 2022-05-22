import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { render } from "storyblok-rich-text-react-renderer"
import { Container, Row, Col, Image} from "react-bootstrap"
import ContactForm from '../../forms/contactForm'
import DisplayCategoryAll from '../../lib/displayCategoryAll'

const StyledContainer = styled(Container)`
 .stayInTouchIcon {
   width: 50px;
   margin-right: 20px;
   margin-bottom: 20px;
 }
`

function Contact ({ content }) {
  //console.log(JSON.stringify(content))

  return (
    <SbEditable content={content}>
    <StyledContainer className="contentBody">
        <Row>
          <Col sm={2} className="contentLeft">
          {(typeof content.intro_image !== 'undefined') &&
            <Image src={content.intro_image.filename} />}
          </Col>

          <Col sm={8} className="content">
            <h3>{content.title}</h3>
            <p className="contentIntro">{content.intro}</p>

            <h1>{content.form_title}</h1>
            <ContactForm></ContactForm>

            {(typeof content.intro_image !== 'undefined') &&
            <Image className="contentIntroImage" src={content.long_text_image.filename} />}
            {render(content.long_text,
              {
                defaultBlokResolver: (name, props) => (
                  <DynamicComponentRendered component={name} blok={props} key={props._uid} />
                )
              }
            )}

            <h5>Blijf op de hoogte van being a yogi</h5>
            <a className="stayInTouchLink notContentLink" href="https://www.instagram.com/_beingayogi_"><img className="stayInTouchIcon" src="/instagram.png" /></a>

            <h5>Volg het Bamboehuis</h5>
            <a className="notContentLink" href="https://www.instagram.com/bamboehuis.amsterdam/"><img className="stayInTouchIcon" src="/instagram.png" /></a>
            <a className="notContentLink" href="http://eepurl.com/duA7q9"><img className="stayInTouchIcon" src="/nieuwsbrief.png" /></a>
          </Col>
          
          <Col sm={2} className="contentRight">
              <DisplayCategoryAll></DisplayCategoryAll>
          </Col>
        </Row>
    </StyledContainer>
    </SbEditable>
  )
}

export default Contact