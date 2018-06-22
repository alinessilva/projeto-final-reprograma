import React from 'react'
import { Row, Col } from 'react-materialize';
import './SectionTips.css'
import CardGit from '../CardGit/CardGit';


function SectionTips(props) {
    return (
        <Row>
            <Col m={3} s={12}>
            <CardGit />
            </Col>
        </Row>
    )
}

export default SectionTips