import React from 'react'
import octcat from './octocat_250x200.png'
import './CardGit.css'

function CardGit () {
    return(
        <div className="row-cards">
        <h1>É facil, faça seu primeiro commit hoje mesmo!</h1>
            <div className="card">
                <div>
                    <img  className="card-img" src={octcat} alt="octocat" />
                </div>
                <p>Lorem Ipsum</p>
            </div>
            <div className="card">
                <div>
                    <img  className="card-img" src={octcat} alt="octocat" />
                </div>
                <p>Lorem Ipsum</p>
            </div> 
            <div className="card">
                <div >
                    <img  className="card-img" src={octcat} alt="octocat" />
                </div>
                <p>Lorem Ipsum</p>
            </div> 
            <div className="card">
                <div>
                    <img  className="card-img" src={octcat} alt="octocat" />
                </div>
                <p>Lorem Ipsum</p>
            </div> 
            <div className="card">
                <div>
                    <img  className="card-img" src={octcat} alt="octocat" />
                </div>
                <p>Lorem Ipsum</p>
            </div> 
        </div>
    )
}

export default CardGit