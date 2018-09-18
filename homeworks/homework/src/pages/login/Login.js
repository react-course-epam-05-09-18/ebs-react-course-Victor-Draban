import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./Login.css";

// components
import InputField from "../../components/input-field/InputField";


class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dateInput: {
          inputLogin: '',
          inputPassword: ''
        }
      };
    }
  
    // validateForm() {
    //   return this.validateLogin() && this.validatePassword();
    // }

    // validateLogin() {
    //   let pattern = /^[a-z]+$/gi;
    //   let result = false;
    //   if (pattern.test(this.state.login)) {
    //     this.state.loginState = ''
    //     result = true;
    //   } else {
    //     this.state.loginState = 'error'
    //   }
    //   return result;
    // }

    // validatePassword() {
    //   let reg = /\w+/g;
    //   let result = false;
    //   if (reg.test(this.state.password)) {
    //     this.state.passwordState = "";
    //     result = true;
    //   } else {
    //     this.state.passwordState = "error";
    //   }
    //   return result;
    // }
  
    // handleChange = event => {
    //   this.setState({
    //     [event.target.id]: event.target.value
    //   });
    // }
    handleChange = (returnName, returnValue) => {
      this.setState({
        dateInput: {
          ...this.state.dateInput,
          [returnName] : returnValue
        }
      })
      console.log(this.state.dateInput);
    }
  
    handleSubmit = event => {
      event.preventDefault();
      this.props.history.push('/courses');
      localStorage.setItem('loginName', this.state.dateInput.inputLogin);
      localStorage.setItem('authmock', true);
    }

    render() {
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <InputField inputType="text" labelValue="Логин" name="inputLogin" regExp="^[a-z]+$" valFunc={ this.handleChange } />
                <InputField inputType="password" labelValue="Пароль" name="inputPassword" regExp="^\w+$" valFunc={ this.handleChange }/>         
                <input type="submit" value="Войти" />
              </form>
          </div>
      );
    }
  }

// export default withRouter(Login);
export default Login;