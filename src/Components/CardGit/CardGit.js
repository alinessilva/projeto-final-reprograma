import React from "react";
import { Row, Col, Card } from 'react-materialize';
import Git from './git550x250.png'


const CardGit = () => (
  <Card>
      <Row>
        <Col s={12} m={12} offset="s2 m2">
          <img src={Git} className="" alt="avatar"/>
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Aprenda como fazer sua primeira contribuição</h5>
        <p className="grey darken-2 white-text">Link</p>
      </Row>
  </Card>
);

export default CardGit;