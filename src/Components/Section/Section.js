import React, { Component } from 'react'
import Card from '../Card/Card'
import Cynthia from './cynthia.jpeg'
import Wendy from './wend.jpeg'
import Sarah from './sarah.jpeg'
import Simone from './simone.jpeg'
import './Section.css'

class Section extends Component {
    state = {
        list: [
                {
                    image: Cynthia,
                    name: 'Cynthia Zanoni',
                    repository: 'wifi-livre-sp',
                    description: 'Lista de locais públicos em São Paulo (capital) com acesso livre à internet',
                    link: 'href=https://github.com/cyz/wifi-livre-sp'
                },
                {
                    image: Wendy,
                    name: 'Wendy Kan',
                    repository: 'twitter-sentiment-analysis',
                    description: 'Os scripts analisam as saídas do twitter (da API do twitter) e as combinam com o dicionário de sentimentos. Em seguida, dá a cada tweet uma pontuação de sentimento.',
                    link: 'https://github.com/wendykan/twitter-sentiment-analysis'
                },
                {
                    image: Sarah,
                    name: 'Sarah Drasner',
                    repository: 'explorador de matriz',
                    description: 'Um recurso para ajudar a descobrir qual método de matriz JavaScript seria melhor usar a qualquer momento',
                    link: 'https://github.com/sdras/array-explorer'
                },
                {
                    image: Simone,
                    name: 'Simone Amorim',
                    repository: 'react -weather',
                    description: 'Um aplicativo simples para pesquisar o clima em sua cidade',
                    link: 'https://github.com/simoneas02/react-weather'
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
                    <h1>Conheça alguns projetos gratuítos no Github</h1>
                    <div className="parent">
                    {list.map(item => (
                        <Card 
                            key={item.repository} 
                            image={item.image} 
                            name={item.name} 
                            repository={item.repository} 
                            description={item.description}
                            link={item.link}
                        />
                    ))}
                    </div>
                </div>
            )
        }
}

export default Section
