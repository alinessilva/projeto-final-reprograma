import React from 'react'
import './ReposList.css'

const ReposList = props => {
    return(
    <div className="container">
    <ul className="box">
        {props.users.map(user => (
            <div key={ user.id }>
                <li> { user.fullname } </li>
                <li> <img className="img" src={ user.avatar_url } /> </li>
                <li> { user.login } </li>
            </div>
        ))}
    </ul>
    </div>)
}

export default ReposList
