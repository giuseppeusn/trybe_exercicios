import React, { Component } from "react";
import Pokemon from "./Pokemon";
import data from "./data.js";

class Pokedex extends Component {
  render () {
    return (
      <div className="pokedex">
        {data.map((item) => <Pokemon key={item.id} pokemon={item}/>)}
      </div>
    );
  }
}

export default Pokedex;
