import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../img/logo.png';
import { saveLogin } from '../../reducers/actionTypes';

//styles
import "./Header.css";

class HeaderComponent extends Component {

    render() {
        const {
            loginName,
            saveLogin
        } = this.props;

        return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <label className="label-logo">Logo</label>
            <div className={ loginName === '' ? 'visually-hidden' : 'log-out-block' }>
                    <label> user { loginName } </label>
                    <a href='/courses/new' onClick={ (event) => {
                        event.preventDefault();
                        saveLogin('');
                        }}> logoff </a>
            </div>
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

export const Header = connect(mapGlobalStoreStateToProps, mapDispatchToProps)(HeaderComponent);