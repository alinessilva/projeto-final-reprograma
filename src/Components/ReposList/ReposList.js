import React from 'react'
import { Row, Col, Card } from 'react-materialize';
import './ReposList.css'

function ReposList (props) {

        return(
        <div className="position">    
        {/* {console.log(props.repos)} */}
        {/* {console.log(props.users)} */}
            {props.users.map(user => (
                <Card key={ user.id } className="card-input" onClick = {() => props.onClickCard(user.login)}>
                {console.log(props.onClickCard)}
                  {/* {console.log(props.users.length)} */}
                  {/* {console.log(props.user)} */}
                    <Row className="row">
                        <Col className="collum">
                            <img className="responsive-img" alt="avatar" src={ user.avatar_url } />
                            {props.users.length===1 ? <li>{ props.user.name }</li> : ''}
                            
                            {props.users.length===1 ? 
                                <ul>
                                {props.repos.map(repo => (
                                    <li key={ repo.id }>{ repo.name } </li>
                                ))}
                                </ul> : ''}
                                <li> { user.login }</li> 
                        </Col>      
                    </Row>
                </Card>
            ))}
        </div>)
}

export default ReposList


