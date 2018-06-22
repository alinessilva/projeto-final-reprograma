import React from "react";
import { Row, Col, Card } from 'react-materialize';
import avatar from '../Section/avatar.jpg';

const CardGit = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" alt="avatar"/>
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Lorem Ipsum</h5>
        <p className="grey darken-2 white-text">Ruby Developer</p>
      </Row>
  </Card>
);

export default CardGit;