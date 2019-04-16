import React, { Component } from 'react';

//import components
import UserRegister from './views/UserRegister';
import { registerUser } from './Api';


export default class UserRegisterContainer extends Component{
    constructor(props){
    super(props);

        this.onChangeEmailAdress = this.onChangeEmailAdress.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePseudo = this.onChangePseudo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          emailAdress: "",
          name : "",
          password: ""
        }
    }
    onChangeEmailAdress(input) {
      this.setState({
        emailAdress: input.target.value
      })
    }
    onChangePassword(input) {
      this.setState({
        password: input.target.value
      })
    }
    onChangeName(input) {
      this.setState({
        name: input.target.value
      })
    }
    onChangePseudo(input) {
      this.setState({
        pseudo: input.target.value
      })
    }
    onSubmit(data) {
      data.preventDefault();
      let obj = {
        "email": this.state.emailAdress,
        "name" : this.state.name,
        "avatar" : "https://www.lemagduchat.com/images/dossiers/2018-11/chat-drole-113730.jpg",
        "password": this.state.password,
        "password_confirmation": this.state.password
      };
      registerUser(obj);
      this.props.history.push('/')
    }

    render(){
        return(
            <UserRegister
            onChangeEmailAdress={this.onChangeEmailAdress}
            onChangePassword={this.onChangePassword}
            onChangeName={this.onChangeName}
            onSubmit={this.onSubmit}
            />
        );
    }
}
