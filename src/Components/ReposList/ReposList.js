import React from 'react'
import { Row, Col, Card } from 'react-materialize';
import './ReposList.css'

const ReposList = props => {
    return(
    <Card>    
    <Row>
    <ul className="box">
        {props.users.map(user => (
            <Col s={8} m={8} offset="s2 m2" key={ user.id }>
                <li> { user.fullname } </li>
                <li> <img className="img" src={ user.avatar_url } /> </li>
                <li> { user.login } </li>
            </Col>
        ))}
    </ul>
    </Row>
    
    </Card>)
}

export default ReposList
