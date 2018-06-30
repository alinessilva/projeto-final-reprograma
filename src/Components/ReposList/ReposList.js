import React from 'react'
import { Row, Col, Card } from 'react-materialize';
import './ReposList.css'

const ReposList = props => {
    return(
    <div className="position">    
    {/* {console.log(props.repos)} */}
        {props.users.map(user => (
            <Card className="card-input">
              {/* {console.log(props.users.length)} */}
              {/* {console.log(props.user)} */}
                <Row key={user.id} className="row">
                    <Col className="collum">
                        <img className="responsive-img" alt="avatar" src={ user.avatar_url } />
                        {props.users.length==1 ? <li>{ props.user.name }</li> : ''}

                        {props.users.length==1 ? 
                            <ul>
                            {props.repos.map(repo => (
                                <li key={ repo.id }>{ repo.name } </li>
                            ))}
                            </ul> : ''}
                            <li>{ user.login }</li> 
                    </Col>      
                </Row>
            </Card>
        ))}
    </div>)
}

export default ReposList


