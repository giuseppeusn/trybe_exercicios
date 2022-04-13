import React, { Component } from 'react';
import './App.css';
import './Icons.css';
import Pokedex from './components/Pokedex';
import data from './components/data.js';
import Button from './components/Button';

class App extends Component {
  constructor () {
    super();

    this.state = {
      pokePosition: 0,
      pokemon: 'Pikachu',
      type: 'all'
    }
  
    this.handleClickNext = this.handleClickNext.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  handleClickNext () {
    const newData = this.state.type !== 'all' ? data.filter((elem) => (elem.type.toLowerCase()) === this.state.type) : data;
    console.log(this.state.pokePosition);
    this.setState((prevPosition) => ({
      pokePosition: prevPosition.pokePosition + 1, 
    }),
    () => {
      if (this.state.pokePosition <= newData.length - 1) {
        const pokemon = newData[this.state.pokePosition];
        this.setState({
          pokemon: pokemon.name
        });
      } else {
        const pokemon = newData[0];
        this.setState({
          pokePosition: 0,
          pokemon: pokemon.name
        });
      }
    })
  }

  changeType (event) {
    const pokeType = event.target.id
    this.setState({
      type: pokeType
    },
    () => {
      const newData = this.state.type !== 'all' ? data.filter((elem) => (elem.type.toLowerCase()) === this.state.type) : data;
      const pokemon = newData[0];

      this.setState({
        pokePosition: 0,
        pokemon: pokemon.name
      });
    });
  }

  teste () {
    const x = data.map((item) => item.type)
    return data.filter((elem) => x.includes(elem.type))
  }

  render() {
    return (
      <div className='App'>
        <h1 className='title'>POKEDÉX</h1>
        <Pokedex pokemon={this.state.pokemon} type={this.state.type} />
        <div className='wrapper'>
          {console.log(this.teste())}
          {
            data.map((item) => {
            const id = item.type.toLowerCase();
            return <Button key={item.type} id={id} src={id} type={item.type.toLowerCase()} func={this.changeType}/>;
            })
          }
        </div>
        <button onClick={this.changeType} id="all">Remover filtro</button>
        <button onClick={this.handleClickNext} className="btn-next">Próximo Pókemon</button>
      </div>
    );
  }
}

export default App;
