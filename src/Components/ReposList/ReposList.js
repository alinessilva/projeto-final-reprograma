import React from 'react'
import { Row, Col, Card } from 'react-materialize';
import './ReposList.css'

const ReposList = props => {
    return(
    <div className="position">    
        {props.users.map(user => (
            <Card className="card-input">
                <Row key={user.id} className="row">
                    <Col className="collum">
                        <img className="responsive-img" alt="avatar" src={ user.avatar_url } />
                        <li>{ props.user.name }</li>
                        <ul>
                            {props.repos.map(repo => (
                                <li key={ repo.id }>{ repo.name } </li>
                            ))}
                        </ul>
                        <li>{ user.login }</li>
                    </Col>      
                </Row>
            </Card>
        ))}
    </div>)
}

export default ReposList


