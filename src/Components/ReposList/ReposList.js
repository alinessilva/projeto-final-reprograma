import React from 'react'
import { Row, Col, Card } from 'react-materialize';
import './ReposList.css'

const ReposList = props => {
    return(
    <div>    
        {props.users.map(user => (
            <Card>
                <Row>
                    <Col s={12} m={6}>
                        <img className="img circle responsive-img" alt="avatar" src={ user.avatar_url } />
                        <li>key={ user.id }></li>
                        <li>{ user.fullname }</li>
                        <li className="grey darken-2 white-text">{ user.login }</li>
                    </Col>      
                </Row>
            </Card>
        ))}
    </div>)
}

export default ReposList