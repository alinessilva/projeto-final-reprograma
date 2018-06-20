import React, {Component} from 'react'
import { fetchUser, fetchSearch } from '../Service/ReposApi'
import './Banner.css'
import Search from '../Search/Search';

class Banner extends Component {
  handleChange = (e) => {
    const filter = e.target.value
    this.props.onFilterChange(filter)
  }

  handleSubmit = (e) => {
    e.preventDefault()
}


  render(){
    return(
      <div className="banner">
        <form action="#" onSubmit={this.handleSubmit}>
          <h1 className="title">
            Aqui você encontra projetos de mulheres inspiradoras do mundo todo!
          </h1>
          <p className="message">
            Você tem uma idéia e não sabe por onde começar?
          </p>
          <input 
            className="input" 
            type="search" 
            onChange={this.handleChange} 
            placeholder="Digite sua busca..." />
        </form>
      </div>
    )
  }
}

export default Banner


