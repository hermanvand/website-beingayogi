import { useState } from 'react'
import { Form, FormControl, Button } from "react-bootstrap"
import styled from 'styled-components'
import { Container, Row, Col} from "react-bootstrap"

const StyledContainer = styled(Container)`
    background-color: #E9AEC9;
    border-radius: 15px;
    margin-top: 10px;
    padding-top: 10px;
    margin-bottom: 20px;
    padding-bottom: 20px;
`
//<Button type="submit" variant="outline-success"><FontAwesomeIcon icon='search' size="1x"/></Button>

function ContactForm () {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        //alert("Hier zou het formulier verstuurd worden.")
      }
  
      setValidated(true);
    };
  
    return (
        <StyledContainer>
            <Row>
                <Col>        
                    <Form id="myForm" action="https://getform.io/f/a782df2c-bc0a-4279-a29d-6386d02c9ff7" method="post" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formulier">
                            <Form.Control type="hidden" name="formulier" value="beingayogi-contact" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="naam">
                            <Form.Label>Hoe heet je?</Form.Label>
                            <Form.Control required type="text" name="naam" placeholder="Naam" />
                            <Form.Control.Feedback type="invalid">Wat is je naam?</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Wat is je emailadres?</Form.Label>
                            <Form.Control required type="email" name="email" placeholder="naam@voorbeeld.nl" />
                            <Form.Control.Feedback type="invalid">Gebruik een geldig emailadres.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="opmerking">
                            <Form.Label>Waar kunnen we je mee helpen?</Form.Label>
                            <Form.Control required as="textarea" name="opmerking" rows={4} placeholder="Stel hier je vraag"/>
                            <Form.Control.Feedback type="invalid">Wat is je vraag?</Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">Verstuur</Button>
                    </Form>
                </Col>
            </Row>
        </StyledContainer>
    )
}

export default ContactForm;