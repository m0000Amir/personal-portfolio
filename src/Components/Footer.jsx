import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MailchimpForm from './MailchimpForm';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/amir-mukhtarov-a23081105/"><img src={navIcon1} /></a>
              <a href="https://www.facebook.com/"><img src={navIcon2} /></a>
              <a href="https://www.instagram.com/m0000amir/"><img src={navIcon3} /></a>
            </div>
            <p>Copyright 2022, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
