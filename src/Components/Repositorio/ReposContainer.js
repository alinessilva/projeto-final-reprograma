import React, { Component } from 'react'
import { fetchUser, fetchSearch } from '../Service/ReposApi'
import ReposList from './ReposList'
import Logo from './Logo.png'
import './ReposContainer.css'

class ReposContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: [],
            users: [],
            user: {},
            username: '',
            avatar_url: ''
        }
    }

    handleChange = (e) => {
        this.setState({username: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetchUser(this.state.username).then(res => this.setState({user: res.data}))
        fetchSearch(this.state.username).then(res => this.setState({users: res.data.items}))
    }

    render() {
        return (
            <div className="border">
                <img className="logoB" src={Logo} />
                <h1> Repositórios </h1>
                <form action='#' onSubmit={this.handleSubmit}>
                    <input
                        className='input'
                        onChange={this.handleChange}
                        type='search' 
                        placeholder='Informe usuário e tecle ENTER'/>
                </form>
                <ReposList repos={this.state.repos} user={this.state.user} users={this.state.users}/>
            </div>
        )
    }
}

export default ReposContainer