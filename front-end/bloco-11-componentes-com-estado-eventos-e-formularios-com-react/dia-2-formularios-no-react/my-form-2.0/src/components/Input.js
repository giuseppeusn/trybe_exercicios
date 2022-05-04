import React, { Component } from "react";

class Input extends Component {
  teste () {

  }

  render() {
    const { type, limit, name, label, func } = this.props;
    return(
      <div className="form-group">
        <label htmlFor={name}>{label}:</label>
        <input type={type} maxLength={limit} name={name} id={name} required onChange={func} />
      </div>
      
    );
  }
}

export default Input;
