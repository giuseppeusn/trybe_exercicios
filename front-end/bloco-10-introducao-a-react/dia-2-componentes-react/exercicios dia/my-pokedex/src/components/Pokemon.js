import React, { Component } from "react";

class Pokemon extends Component {
  render () {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return (
      <div className="card">
        <h1>{name}</h1>
        <p>{type}</p>
        <img src={image} alt='imagem do pokemon' />
        <p>Peso médio: {averageWeight.value} {averageWeight.measurementUnit}</p>
      </div>
    );
  }
}


export default Pokemon;
