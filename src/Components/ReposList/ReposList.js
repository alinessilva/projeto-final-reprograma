import React from 'react'
import { Row, Col, Card } from 'react-materialize';
import './ReposList.css'

const ReposList = props => {
    return(
    <div className="position">    
        {props.users.map(user => (
            <Card className="card-input">
                <Row>
                    <Col>
                        <img className="img circle responsive-img" alt="avatar" src={ user.avatar_url } />
                        <li>{ user.fullname }</li>
                        <li className="grey darken-2 white-text">{ user.login }</li>
                    </Col>      
                </Row>
            </Card>
        ))}
    </div>)
}

export default ReposList