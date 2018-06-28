import React from 'react'
import { Row, Col, Card } from 'react-materialize';
import './ReposList.css'

const ReposList = props => {
    return(
    <div className="position">    
        {props.users.map(user => (
            <Card className="card-input">
                <Row className="row">
                    <Col className="col">
                        <img className="responsive-img" alt="avatar" src={ user.avatar_url } />
                        <li>{ user.fullname }</li>
                        <li>{ user.login }</li>
                    </Col>      
                </Row>
            </Card>
        ))}
    </div>)
}

export default ReposList