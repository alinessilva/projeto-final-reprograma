import React, {Component} from 'react'
import { fetchUser, fetchSearch } from '../Service/ReposApi'
import Search from '../Search/Search';
import ReposContainer from '../Repositorio/ReposContainer'
import './Banner.css'
import SectionGit from '../SectionGit/SectionGit';


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
      <div>
        <div className="banner">
          <form action="#" onSubmit={this.handleSubmit}>
            <h1 className="title">
              Aqui você encontra projetos de mulheres inspiradoras do mundo todo!
            </h1>
            <p className="message">
              Você tem uma idéia e não sabe por onde começar?
            </p>
          </form>
        </div>
          <ReposContainer />
      </div>
    )
  }
}

export default Banner


