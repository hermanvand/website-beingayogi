import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, FormControl, Button } from "react-bootstrap"
import styled from 'styled-components'
import { Container, Row, Col} from "react-bootstrap"

const StyledContainer = styled(Container)`
    background-color: #E9AEC9;
    border-radius: 15px;
    margin-top: 10px;
    padding-top: 10px;
    margin-bottom: 20px;
`
//<Button type="submit" variant="outline-success"><FontAwesomeIcon icon='search' size="1x"/></Button>

function ContactForm () {
    return (
        <StyledContainer>
            <Row>
                <Col>        
                    <Form action="/" method="post">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Hoe heet je?</Form.Label>
                            <Form.Control type="text" placeholder="Naam" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Wat is je emailadres?</Form.Label>
                            <Form.Control type="email" placeholder="naam@voorbeeld.nl" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Waar kunnen we je mee helpen?</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Stel hier je vraag"/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </StyledContainer>
    )
}

export default ContactForm;