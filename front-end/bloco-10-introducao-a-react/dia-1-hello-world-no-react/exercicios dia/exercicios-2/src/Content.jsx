import React from "react";

const Block = (key) => {
  return (
    <ul>
      <li>O conteúdo é: {key.conteudo}</li>
      <li>Status: {key.status}</li>
      <li>Bloco: {key.bloco}</li>
    </ul>
  )
}

class Content extends React.Component {
  render () {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      <div>
        {conteudos.map((item) => Block(item))}
      </div>
    );
  }
}

export default Content;