import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Estudar','Academia','Passear com cachorro','Ler um livro'];

function App() {
  return (
    tasks.map((item) => Task(item))
  );
}

export default App;
