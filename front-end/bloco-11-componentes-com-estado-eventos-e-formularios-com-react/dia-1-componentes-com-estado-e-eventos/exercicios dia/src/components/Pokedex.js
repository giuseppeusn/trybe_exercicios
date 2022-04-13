import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from './data';

class Pokedex extends Component {
  render () {
    const { pokemon } = this.props;
    const obj = data.find((item) => item.name === pokemon);

    return (
      <div className="pokedex">
        {<Pokemon key={obj.id} pokemon={obj}/>}
      </div>
    );
  }
}

export default Pokedex;
