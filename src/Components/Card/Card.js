import React, { Component } from 'react'
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
          <h4>{this.props.name}</h4>
          <p>{this.props.repository}</p>
          <p>{this.props.description}</p>
          <a href={this.props.link} target="_blank">GitHub</a>
        </div>
    )
  }
}

export default Card