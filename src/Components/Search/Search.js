import React, { Component } from 'react'
import Button from '../Button/Button';
import Result from '../Result/Result'
import './search.css'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            results:[],
            newInput: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        this.setState({
            results: [
                this.state.results,
                { text: this.state.newInput }
            ]
        });

        this.setState({ newInput: '' })
        e.preventDefault()
        
    }

    handleTextChange (e) {
        this.setState({ newInput: e.target.value })
    }

    // handleChange = (e) => {
        
    //     const valorDoInput = e.target.value;
        
    //     console.log(valorDoInput)
    // }

    // handleClick = (e) => {
    //     e.preventDefault();
        
    //     console.log('clicou')
    // }

        render() {
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            className="input" 
                            value={this.state.newInput} 
                            onChange={this.handleTextChange} 
                            placeholder="Digite sua busca..." 
                        />
                        <Button />
                    </form>
                    {this.state.results.map((result, index) => {
                        return <Result key={index} text={result.text} />
                    })}
                </div>
            )
        }     
}

export default Search