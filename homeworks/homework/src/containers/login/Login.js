import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from "react-bootstrap";
import "./Login.css";
import { store } from "../..";

class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        login: "",
        password: "",
        loginState: "",
        passwordState: "",
        inp: "введите"
      };
    }
  
    validateForm() {
      return this.validateLogin() && this.validatePassword();
    }

    validateLogin() {
      let pattern = /^[a-z]+$/gi;
      let result = false;
      if (pattern.test(this.state.login)) {
        this.state.loginState = ''
        result = true;
      } else {
        this.state.loginState = 'error'
      }
      return result;
    }

    validatePassword() {
      let reg = /\w+/g;
      let result = false;
      if (reg.test(this.state.password)) {
        this.state.passwordState = "";
        result = true;
      } else {
        this.state.passwordState = "error";
      }
      return result;
    }
  
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      this.props.history.push('/courses');
    }
  
    render() {
      return (
        <div className="Login">
          <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="login" bsSize="large" validationState={this.validateLogin()} validationState={this.state.loginState}>
              <Col sm={2} componentClass={ControlLabel}>
                Логин
              </Col>
              <Col sm={8}>
                <FormControl
                type="text"
                placeholder="Логин"
                value={this.state.login}
                onChange={this.handleChange}
                label="Email address"
                />
              </Col>
              <Col sm={2} componentClass={ControlLabel}>
                {this.state.inp}
              </Col>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large" validationState={this.validatePassword()} validationState={this.state.passwordState}>
              <Col sm={2} componentClass={ControlLabel}>
                Пароль
              </Col>
              <Col sm={8}>
                <FormControl
                  type="password"
                  placeholder="Пароль"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={1} sm={4}>
                <Button 
                  type="submit"
                  disabled={!this.validateForm()}
                  >Войти
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      );
    }
  }

export default withRouter(Login);