import React, { Component } from 'react';
import logo from '../../img/logo.png';
import "./Header.css";

class Header extends Component {
    render() {
        return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <label className="label-logo">Logo</label>
        </div>
        );
    }
}

export default Header;