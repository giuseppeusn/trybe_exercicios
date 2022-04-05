import './App.css';
import Pokedex from './components/Pokedex';
import data from './components/data.js';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>POKEDÉX</h1>
      <Pokedex pokemons={data}/>
    </div>
  );
}

export default App;
