import React, {Component} from 'react'
import { fetchUser, fetchSearch } from '../Service/ReposApi'
import ReposList from '../Repositorio/ReposList'
import SectionGit from '../SectionGit/SectionGit';
import './Banner.css'


class Banner extends Component {
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
    // if (!window.females || !window.females[this.state.username.toLowerCase()]) return;
    fetchUser(this.state.username).then(res => this.setState({user: res.data}))
    fetchSearch(this.state.username).then(res => this.setState({users: res.data.items}))
  }

  render(){
    return(
      <div>
        <div className="banner">
          <form action="#" onSubmit={this.handleSubmit}>
            <h1 className="title">
              Aqui você encontra projetos de mulheres inspiradoras do mundo todo!
            </h1>
            <p className="message">
              Você tem uma idéia e não sabe por onde começar?
            </p>
            <input
              className='input'
              onChange={this.handleChange}
              type='search' 
              placeholder='Informe usuário e tecle ENTER'
            />
          </form>
        </div>
        <ReposList users={this.state.users} />
      </div>
    )
  }
}

export default Banner


