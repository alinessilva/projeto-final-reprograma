import React from 'react'

const ReposList = props => {
    return(
    <ul>
        {props.users.map(user => (
            <div key={ user.id }>
                <li> {user.fullname} </li>
                <li> <img src={ user.avatar_url } /> </li>
                <li> {user.login} </li>
            </div>
        ))}
    </ul>)
}

export default ReposList
