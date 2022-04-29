import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SbEditable from 'storyblok-react'
import { Container, Row, Col, Button, Form, Toast, ToastBody } from "react-bootstrap"

const StyledContainer = styled(Container)`
max-width:100%;
margin: 0px;
padding: 0px;
.fullWidth {
    background-color: #BA9645;
    margin: 0px;
    padding: 0px;
    text-align: center;
} 
// title row
.tagline {
  margin-top: 10px;
  padding-left: 0px;
  font-size: 1.6em;
  font-weight: bold;
  color: white;
};
.secondline {
  margin-top: 10px;
  padding-left: 0px;
  font-size: 1.2em;
  color: white;
};
.description {
  //background: rgba(255,255,255,0.7);
  margin-top: 20px;
  padding-left: 25%;
  padding-right: 25%;
  text-align: center;
}
.teaser {
  margin-top: 10px;
  margin-left: 0px;
  margin-right: 0px;
  height: 0px;
  padding: 0px;
  padding-bottom: ${(props) => props.hoogte}%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  background-image: ${(props) => props.url};
}
.form {
  background: rgba(255,255,255,0.3);
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 0px;
  margin-right: 0px;
}
#myForm {
  //background-color: #BA9645;
}
#myToast {
  margin-top: 20px;
}
#myFormTextCol {
  padding-left: 32px;
  margin-top: 10px;
  color: white;
}
#myFormInputCol {
  padding-left: 32px;
  padding-right: 0px;
}
#myFormButtonCol {
  padding-left: 0px;
  padding-right: 32px;
  display: flex;
  align-items: center;
}
`

function Highlight ({blok}) {
  // console.log(JSON.stringify({blok}))

  const GETFORM_FORM_ENDPOINT = "https://getform.io/f/a782df2c-bc0a-4279-a29d-6386d02c9ff7";

  const [validated, setValidated] = useState(false);
  const [control, setControl] = useState({
      formulier: "beingayogi-app",
      naam: "-",
      email: "",
      opmerking: "-"
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
    <SbEditable content={blok}>
        <StyledContainer url={"url("+blok.image.filename+")"} hoogte={blok.hoogte}>
          <Row className="fullWidth">
              <Col></Col>
              <Col sm={8} >
                <p className="tagline">{blok.title}</p>
                <p className="secondline">{blok.subtitle}</p>
              </Col>
              <Col></Col>
          </Row>
          <Row>
              <Col>
                <p className='description'>{blok.description}</p>
                <p className='description'>{blok.action}</p>
              </Col>
          </Row>
          <Row className="teaser">
            <Row className="form">
              <Col></Col>
              <Col sm={8}>
                <Form id="myForm" action="https://getform.io/f/a782df2c-bc0a-4279-a29d-6386d02c9ff7" method="post" noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col id="myFormInputCol">
                    <Form.Group className="mb-3" controlId="formulier">
                        <Form.Control type="hidden" name="formulier" value={control.formulier} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="naam">
                        <Form.Control type="hidden" name="naam" value={control.naam} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="opmerking">
                        <Form.Control type="hidden" name="opmerking" value={control.opmerking} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control required type="email" name="email" placeholder="Je emailadres" value={control.email} onChange={handleChange()} />
                        <Form.Control.Feedback type="invalid">Gebruik een geldig emailadres.</Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                    <Col xs="auto" id="myFormButtonCol">
                      <Button type="submit">Verstuur</Button>
                    </Col>
                    </Row>
                    <Row>
                    <Toast id="myToast" onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                        <ToastBody className="Primary">Dank je voor je interesse, we houden je op de hoogte.</ToastBody>
                    </Toast>
                    </Row>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </Row>
        </StyledContainer>
    </SbEditable>
  )
}

export default Highlight