// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import {EnviarMensagem} from './components/EnviarMensagem'
import { Mensagens } from './components/Mensagens';
import React from 'react';

const LayoutDaPagina = styled.div`
  display: flex;
  justify-content: center;
`

const Conversa = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-rows: 13fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  height: 99.5vh;
`

const MensagensNaTela = styled.div`

`

const BotoesDeMensagens = styled.div`
  display: grid;
  grid-template-columns: 100px 15fr 1fr;
`


class App extends React.Component {
  state = {
    usuario: "",
    mensagem: "",
    mensagens: [
      {
        usuario: "Victor",
        mensagem: "Olá",
      }
    ]
  };

  changeUsuario = (event) => {
    this.setState({
      usuario: event.target.usuario
    })
  }

  changeMensagem = (event) => {
    this.setState({
      mensagem: event.target.mensagem
    })
  }

  enviarMensagem = () => {
    const novasMensagens = [
      ...this.state.mensagens,
      {
      usuario: this.state.usuario,
      mensagem: this.state.mensagem,
      }
    ];

    this.setState({
      mensagens: novasMensagens
    })
  }

  render() {
    return (
      <LayoutDaPagina>
        <Conversa>
          <MensagensNaTela>
            Conversa
          </MensagensNaTela>
          <BotoesDeMensagens>
            <input  
            value={this.state.usuario}
            onChange={this.changeUsuario}
            placeholder="Usuário"
            ></input>

            <input 
            placeholder="Mensagem" 
            value={this.state.mensagem}
            onChange={this.changeMensagem} />

            <button onClick={this.enviarMensagem}>Enviar</button>
          </BotoesDeMensagens>
        </Conversa>
      </LayoutDaPagina> 
    );
  }
}

export default App;
