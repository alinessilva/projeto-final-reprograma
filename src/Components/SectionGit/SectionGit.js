import React from 'react';
import ReposList from '../ReposList/ReposList';
import './SectionGit.css'
import { Row, Col } from 'react-materialize';


function SectionGit(props) {
    return (
      <Row>
        <Col m={3} s={12}>
          <ReposList users={props.users} />
        </Col>
      </Row>
    )
}

export default SectionGit
