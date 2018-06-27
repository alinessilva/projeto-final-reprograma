import React from 'react'
import octcat from './octocat_250x200.png'
import './CardGit.css'

function CardGit () {
    return(
        <div className="row-cards">
        <h1>Faça sua primeira contribuição</h1>
            <div className="card">
                <img className="card-img" src={octcat} alt="octocat" />
                <p>Lorem Ipsum</p>
            </div>
            <div className="card">
                <img className="card-img" src={octcat} alt="octocat" />
                <p>Lorem Ipsum</p>
            </div> 
            <div className="card">
                <img className="card-img" src={octcat} alt="octocat" />
                <p>Lorem Ipsum</p>
            </div> 
            <div className="card">
                <img className="card-img" src={octcat} alt="octocat" />
                <p>Lorem Ipsum</p>
            </div> 
            <div className="card">
                <img className="card-img" src={octcat} alt="octocat" />
                <p>Lorem Ipsum</p>
            </div> 
        </div>
    )
}

export default CardGit