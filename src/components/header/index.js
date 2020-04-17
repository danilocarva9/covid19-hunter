import React from 'react';
import { Container, Col, Row, NavLink } from 'react-bootstrap';
import './styles.css';


const Header = () => 

<Container fluid id="main-header">
  <Row>
    <Col>
      <a href='/'><h4>Covid-19 Hunter</h4></a>
    </Col>
  </Row>
</Container>

export default Header;