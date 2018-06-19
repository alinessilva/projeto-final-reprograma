import React, { Component } from 'react'
import Card from '../Card/Card'
import Background from '../Background/Background'
// import Repos from '../Repositorio/ReposContainer'
import './Section.css'

class Section extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lista: [
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
    }

    render() {
        return (
            <div>
                <h1>Aqui você encontra alguns diamantes do Github</h1>

                {this.state.lista.map(item => (
                    <Card key={item.repository} image={item.image} name={item.name} repository={item.repository} description={item.description} />
                ))}

            </div>
        )
    }

}

export default Section
