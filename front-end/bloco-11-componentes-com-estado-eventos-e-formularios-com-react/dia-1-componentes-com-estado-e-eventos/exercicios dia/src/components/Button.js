import React, { Component } from 'react';

class Button extends Component {
  render () {
    const {id, src, type, func} = this.props;
    return (
      <div onClick={func} className={`icon ${id}`} id={id}>
        {/* <img src={src} id={id} alt={`${type} symbol`} /> */}
        <span id={id}>{type}</span>
      </div>
    );
  }
}


export default Button;
