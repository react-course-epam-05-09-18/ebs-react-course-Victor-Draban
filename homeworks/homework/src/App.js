import React, { Component } from 'react';
import Route from "./router/Router";
import { connect } from 'react-redux';
import { saveLogin } from './reducers/actionTypes';
import { LOGIN } from './constants/PathConstants';

//components
import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";

//styles
import './App.css';

const visuallyHidden = 'visually-hidden';
const logInOut = 'log-in-out';

class AppComponent extends Component { 
  loginName = (name) => {
    return name === '' ? visuallyHidden : logInOut;
  }

  logOut = (event) => {
    event.preventDefault();
    this.props.saveLogin('');
  }

  render() {
    const { loginName } = this.props;
    return (
      <div className="App">
        <Header user={loginName} outLink={LOGIN} logOutFunc={this.logOut} customClass={this.loginName(loginName)}/>
        <Route />
        <Footer />
      </div>
    );
  }
}

const mapGlobalStoreStateToProps = (globalStore) => {
  return {
    loginName : globalStore.loginReducer.login
  }
}

const mapDispatchToProps = {
  saveLogin
}

export const App = connect(mapGlobalStoreStateToProps, mapDispatchToProps)(AppComponent);
