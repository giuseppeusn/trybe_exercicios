import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      image: '',
      isLoading: true,
    };

    this.fetchApi = this.fetchApi.bind(this);
    this.changeDog = this.changeDog.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate() {
    const { image } = this.state;
    if (image.includes('terrier')) return false;

    return true;
  }

  componentDidUpdate() {
    const { image } = this.state;
    localStorage.setItem('image', image);
  }

  changeDog() {
    this.setState({
      isLoading: true,
    }, async () => {
      this.fetchApi();
    });
  }

  async fetchApi() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    this.setState({
      image: data.message,
    }, () => {
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    const { image, isLoading } = this.state;
    return (
      <div className="App">
        {isLoading ? (
          <div className="lds-dual-ring" />
        ) : (
          <div className="container">
            <img src={ image } alt="doguinhos" />
            <button type="button" onClick={ this.changeDog }>
              Mudar doguinho
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
