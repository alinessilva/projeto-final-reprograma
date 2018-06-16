import React, { Component } from 'react'
import { fetchRepos } from '../Service/ReposApi'
import ReposList from './ReposList'
import LogoB from './LogoB.png'
import './ReposContainer.css'

class ReposContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: [],
            username: ''
        }
    }

    handleChange = (e) => {
        this.setState({username: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetchRepos(this.state.username).then(res => this.setState({repos: res.data}))
    }

    render() {
        return (
            <div className="border">
                <img className="logoB" src={LogoB} />
                <h1> Repositórios </h1>
                <form action='#' onSubmit={this.handleSubmit}>
                    <input
                        className='input'
                        onChange={this.handleChange}
                        //style={{width: '250px'}}
                        type='search' 
                        placeholder='Informe usuário e tecle ENTER'/>
                </form>
                <ReposList repos={this.state.repos}/>
            </div>
        )
    }
}

export default ReposContainer