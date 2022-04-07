import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    
    this.state = {
      clickOne: 0,
      clickTwo: 0,
      clickThree: 0,
      bgColorOne: 'green',
      bgColorTwo: 'green',
      bgColorThree: 'green'
    };

    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  }

  async handleClickOne () {
    await this.setState((prevState, _props) => ({
      clickOne: prevState.clickOne + 1
    }))

    if ((this.state.clickOne) % 2 === 0) {
      this.setState({
        bgColorOne: 'green'
      })
    } else {
      this.setState({
        bgColorOne: 'blue'
      })
    }
  }

  async handleClickTwo () {
    await this.setState((prevState, _props) => ({
      clickTwo: prevState.clickTwo + 1
    }))

    if ((this.state.clickTwo) % 2 === 0) {
      this.setState({
        bgColorTwo: 'green'
      })
    } else {
      this.setState({
        bgColorTwo: 'blue'
      })
    }
  }

  async handleClickThree () {
    await this.setState((prevState, _props) => ({
      clickThree: prevState.clickThree + 1
    }))

    if ((this.state.clickThree) % 2 === 0) {
      this.setState({
        bgColorThree: 'green'
      })
    } else {
      this.setState({
        bgColorThree: 'blue'
      })
    }
  }

  render () {

    return (
      <div className='main'>
        <button onClick={this.handleClickOne} style={{ background: this.state.bgColorOne }}>{this.state.clickOne}</button>
        <button onClick={this.handleClickTwo} style={{ background: this.state.bgColorTwo }}>{this.state.clickTwo}</button>
        <button onClick={this.handleClickThree} style={{ background: this.state.bgColorThree }}>{this.state.clickThree}</button>
      </div>
    );
  }
}

export default App;
