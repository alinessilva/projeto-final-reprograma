import React, {Component} from 'react'
import { fetchUser, fetchSearch, fetchRepos } from '../Service/ReposApi'
import ReposList from '../ReposList/ReposList'
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
    fetchRepos(this.state.username).then(res => this.setState({repos: res.data}))
  }

  handleClick(e) {
    e.preventDefault();
    fetchUser('brunavieirat').then(res => this.setState({user: res.data})).catch(console.log(res))
    fetchSearch('brunavieirat').then(res => this.setState({users: res.data.items}))
    fetchRepos('brunavieirat').then(res => this.setState({repos: res.data}))
    console.log('Clicou');
  }

  render(){
    return(
      <div>
        <div className="banner">
          <form action="#" onSubmit={this.handleSubmit}>
            <h1 className="title">
              Aqui você encontra projetos de mulheres inspiradoras do mundo todo!
            </h1>
            <input
              className='input'
              onChange={this.handleChange}
              type='search' 
              placeholder='Informe nome ou repositório e tecle ENTER'
            />
          </form>
        </div>
        <ReposList onClickCard={this.handleClick} users={this.state.users} user={this.state.user} repos={this.state.repos} />
      </div>
    )
  }
}

export default Banner


