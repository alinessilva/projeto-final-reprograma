import React, {Component} from 'react'
import avatar from './avatar.jpg'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = [
      {
        image: '',
        name: 'Cynthia Zanoni',
        repository: 'wifi-livre-sp',
        description: 'Lista de locais públicos em São Paulo (capital) com acesso livre à internet'
      },
      {
        image: '',
        name: 'Aline Silva',
        repository: 'Diamond',
        description: 'Lorem Ipsum'
      }
    ]
  }

  handleClick = (e) => {
    e.preventDefault()
  }

  render(){
    return(
      <div>
        <img src={avatar} alt="Avatar"/>
        <h3>{this.state.name}</h3>
        <p>{this.state.repository}</p>
        <p>{this.state.description}</p>
        <a href="#" onClick={this.handleClick}>Link</a>    
      </div>
    )
  }
}

export default Card