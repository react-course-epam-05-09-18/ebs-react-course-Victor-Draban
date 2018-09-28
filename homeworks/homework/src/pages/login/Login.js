import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveLogin } from '../../reducers/actionTypes';

// components
import InputField from "../../components/input-field/InputField";

//styles
import "./Login.css";

class LoginPage extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loginState : false,
        passwordState : false,
        error : null
      };
    }

    handleChange = (returnName, returnValue) => {
      this.setState({
        [returnName] : returnValue
      })
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.loginState && this.state.passwordState) {
        this.props.saveLogin(this.state.loginState);
        this.props.history.push('/courses');
      } else {
        this.setState( {error : true} )
      }
    }

    render() {
      return (
          <div className='login-form'>
              { this.state.error ? (
                <div style={{background : 'darkcyan'}}>Не верно введен логин или пароль</div>
              ) : null }
              <form onSubmit={this.handleSubmit}>
                  <InputField inputType="text" labelValue="Логин" name="loginState" regExp="^[a-zA-Z]+$" valFunc={ this.handleChange } />
                  <InputField inputType="password" labelValue="Пароль" name="passwordState" regExp="^\w+$" valFunc={ this.handleChange }/>         
                  <input type="submit" value="Войти" />
              </form>
          </div>
      );
    }
}

const mapDispatchToProps = {
  saveLogin
}

export const Login = connect(null, mapDispatchToProps)(LoginPage);