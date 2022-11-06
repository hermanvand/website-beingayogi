import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Container, Row, Col, Button, Form, Toast, ToastBody} from "react-bootstrap"

const StyledContainer = styled(Container)`
    background-color: #E9AEC9;
    border-radius: 15px;
    margin-top: 10px;
    padding-top: 10px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    #myToast {
        margin-top: 20px;
    }
`
//<Button type="submit" variant="outline-success"><FontAwesomeIcon icon='search' size="1x"/></Button>

function ContactForm () {

    const GETFORM_FORM_ENDPOINT = "https://getform.io/f/a782df2c-bc0a-4279-a29d-6386d02c9ff7";

    const [validated, setValidated] = useState(false);
    const [control, setControl] = useState({
        formulier: "beingayogi-contact",
        naam: "",
        email: "",
        opmerking: ""
    });
    const [showToast, setShowToast] = useState(false);

    const handleChange = () => e => {
        const name = e.target.name;
        const value = e.target.value;
        setControl((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
      }
      else {
        const formData = new FormData();
        Object.entries(control).forEach(([key, value]) => {
            formData.append(key, value);
        });

        /* no spam from Crytorounc please... could make a blacklist here */
        if (formData.get("naam") === "Crytorounc") {
            event.preventDefault();
            event.stopPropagation();
        }

        setShowToast(true);

        /*
        // USE THIS WHEN PAYING :-)
        event.preventDefault();

        axios
            .post(
                GETFORM_FORM_ENDPOINT,
                formData,
                {headers: {Accept: "application/json"}}
            )
            .then(function (response) {
                //alert(JSON.stringify(response))
                setValidated(false);
                setControl({
                    formulier: "beingayogi-contact",
                    naam: "",
                    email: "",
                    opmerking: ""
                });
                setShowToast(true);
            })
            .catch(function (error) {
                //alert(JSON.stringify(error))
                //console.log(error);
            });
        */

      }
  
    };
  
    return (
        <StyledContainer>
            <Row>
                <Col>        
                    <Form id="myForm" action="https://getform.io/f/a782df2c-bc0a-4279-a29d-6386d02c9ff7" method="post" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formulier">
                            <Form.Control type="hidden" name="formulier" value={control.formulier} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="naam">
                            <Form.Label>Hoe heet je?</Form.Label>
                            <Form.Control required type="text" name="naam" placeholder="Naam" value={control.naam} onChange={handleChange()} />
                            <Form.Control.Feedback type="invalid">Wat is je naam?</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Wat is je emailadres?</Form.Label>
                            <Form.Control required type="email" name="email" placeholder="naam@voorbeeld.nl" value={control.email} onChange={handleChange()} />
                            <Form.Control.Feedback type="invalid">Gebruik een geldig emailadres.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="opmerking">
                            <Form.Label>Waar kunnen we je mee helpen?</Form.Label>
                            <Form.Control required as="textarea" name="opmerking" rows={4} placeholder="Stel hier je vraag" value={control.opmerking} onChange={handleChange()} />
                            <Form.Control.Feedback type="invalid">Wat is je vraag?</Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">Verstuur</Button>
                        <Toast id="myToast" onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                            <ToastBody className="Primary">Dank je voor je bericht, we nemen snel contact op.</ToastBody>
                        </Toast>
                    </Form>
                </Col>
            </Row>
        </StyledContainer>
    )
}

export default ContactForm;