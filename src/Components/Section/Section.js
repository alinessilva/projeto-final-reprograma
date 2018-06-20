import React, { Component } from 'react'
import Card from '../Card/Card'
import './Section.css'

class Section extends Component {
    state = {
        list: [
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
                },
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

        render() {
            let list = this.state.list

            if(this.props.filter){
                list = this.state.list.filter(item => item.name !== this.props.name)
            }

            return (
                <div>
                    <h1>Existe uma mina de diamantes no Github</h1>
                    <div className="parent">
                    {list.map(item => (
                        <Card 
                            key={item.repository} 
                            image={item.image} 
                            name={item.name} 
                            repository={item.repository} 
                            description={item.description} 
                        />
                    ))}
                    </div>
                </div>
            )
        }
}

export default Section
