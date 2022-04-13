import React, { Component } from "react";

class Textarea extends Component {
  render () {
    const { name, limit, func, id } = this.props;

    return(
      <div className="form-group">
        <label htmlFor={id}>{name}</label>
        <textarea maxLength={limit} required onMouseEnter={func} id={id} />
      </div>
    );
  }
}

export default Textarea;
