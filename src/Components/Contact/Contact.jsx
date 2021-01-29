import React, { useState } from "react";
import "./Contact.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import telephone from "../../images/form/telephone.png";
import telephoneActive from "../../images/form/telephone-active.png";
import email from "../../images/form/email.png";
import emailActive from "../../images/form/email-active.png";
import address from "../../images/form/address.png";
import addressActive from "../../images/form/address-active.png";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [addressState, setAddressState] = useState(address);
  const [telephoneState, setTelephoneState] = useState(telephone);
  const [emailState, setEmailState] = useState(email);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container className="contact-container">
      <div className="contact-header-container">
        <h1 className="border-header contact-header">צור קשר</h1>
      </div>
      <Row>
        <Col className="contact-right-col" md={8}>
          <p>
            <strong>
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.
            </strong>
            קלאצי הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש,
            כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
          </p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="">
                <Form.Control required type="email" placeholder="אימייל" />
                <Form.Control.Feedback type="invalid">כתובת מייל לא תקינה</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="" className="form-row-col">
                <Form.Control required type="text" placeholder="שם" />
                <Form.Control.Feedback type="invalid">שדה חובה</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="">
                <Form.Control required type="phone" placeholder="מס' טלפון" />
                <Form.Control.Feedback type="invalid">שדה חובה</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="" className="form-row-col">
                <Form.Control type="text" placeholder="מיקום" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="">
                <Form.Control type="text" placeholder="איך שמעת עלינו" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="f">
                <Form.Control type="text" as="textarea" row="5" placeholder="מידע נוסף" />
              </Form.Group>
            </Form.Row>
            <Button className="submit-button" variant="light" type="submit">
              שלח
            </Button>
          </Form>
        </Col>
        <Col md={4} className="contact-left-col">
          <Row>
            <Col className="contact-icon-container">
              <img
                src={telephoneState}
                alt="phone"
                onMouseEnter={() => setTelephoneState(telephoneActive)}
                onMouseLeave={() => setTelephoneState(telephone)}
              />
              <p>054-5555555</p>
            </Col>
          </Row>
          <Row>
            <Col className="contact-icon-container">
              <img
                src={emailState}
                alt="mail address"
                onMouseEnter={() => setEmailState(emailActive)}
                onMouseLeave={() => setEmailState(email)}
              />
              <p>some@email.com</p>
            </Col>
          </Row>
          <Row>
            <Col className="contact-icon-container">
              <img
                src={addressState}
                alt="address"
                onMouseEnter={() => setAddressState(addressActive)}
                onMouseLeave={() => setAddressState(address)}
              />
              <p>לורם איפסום דולור סיט אמט, קלאצי הועניב היושבב שערש שמחויט</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
