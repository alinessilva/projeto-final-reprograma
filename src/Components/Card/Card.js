import React, { Component } from 'react'
import avatar from './avatar.jpg'

class Card extends Component {
  handleClick = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <img src={this.props.image || avatar} alt="Avatar" />
        <h3>{this.props.name}</h3>
        <p>{this.props.repository}</p>
        <p>{this.props.description}</p>
        <a nClick={this.handleClick}>Link</a>
      </div>
    )
  }
}

export default Card