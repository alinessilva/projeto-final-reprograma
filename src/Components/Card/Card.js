import React, { Component } from 'react'
// import avatar from './avatar.jpg'
import octocat from './octocat_250x200.png'
import './Card.css'

class Card extends Component {
  handleClick = (e) => {
    e.preventDefault()
  }

  render() {
    return (
        <div className="child">
          <img className="img" src={this.props.image || octocat} alt="Avatar" />
          <h3>{this.props.name}</h3>
          <p>{this.props.repository}</p>
          <p>{this.props.description}</p>
          <a href='#' onClick={this.handleClick}>Link</a>
        </div>
    )
  }
}

export default Card