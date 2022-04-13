import React, { Component } from "react";
import Input from './Input';
import Textarea from "./Textarea";

class Form extends Component {
  constructor () {
    super();

    this.state = {
      alert: true,
    }

    this.showAlert = this.showAlert.bind(this);
  }

  toUpper ({ target }) {
    target.value = target.value.toUpperCase();
  }

  rmvSpecialCharacter ({ target }) {
    target.value = target.value.replace(/[^a-zA-Z0-9 ]/g, '');
  }

  rmvNumber ({ target }) {
    if (target.value.charAt(0).match(/^[0-9]+$/)) target.value = '';
  }

  showAlert () {
    if(this.state.alert) {
      alert('Preencha os dados com cuidado');
      this.setState({
        alert: false,
      });
    }
  }

  render () {
    return (
      <form>
        <fieldset>
          <legend>React Form</legend>
          <Input type="text" limit="40" name="fullName" label="Nome completo" func={this.toUpper}/>
          <Input type="email" limit="50" name="email" label="Email" />
          <Input type="text" limit="11" name="cpf" label="CPF" />
          <Input type="text" limit="200" name="adress" label="Endereço" func={this.rmvSpecialCharacter} />
          <div className="form-group">
            <label htmlFor="address">Cidade</label>
            <input type="text" maxLength="28" name="address" id="address" required onBlur={this.rmvNumber} />
          </div>
          <div className="one-line">
            <div className="form-group">
              <label htmlFor="state">Estado:</label>
              <select required>
                <option>Teste</option>
              </select>
            </div>
            <div className="form-group radio-session">
              <label htmlFor="type">Tipo</label>
                <div className="radio">
                  <label>Casa
                    <input type="radio" name="type" />
                  </label>
                  <label>Apartamento
                    <input type="radio" name="type" />
                  </label>
                </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Último emprego</legend>
          <Textarea name="Resumo do currículo" limit="1000" id="resume" />
          <Textarea name="Cargo" limit="40" func={this.showAlert} id="role"/>
          <Textarea name="Descrição do cargo" limit="500" id="desc" />
        </fieldset>
      </form>
    ); 
  }
}

export default Form;
