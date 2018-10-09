import React, { Component } from 'react';

//components
import { Loggin } from '../log-in-out/LoggInOut';
import { Logo } from '../logo/Logo';

//styles
import "./Header.css";

//images
import logo from '../../img/logo.png';

export class Header extends Component {
    render() {
        const {
            user,
            outLink,
            logOutFunc,
            customClass
        } = this.props;

        return (
        <div className="App-header">
            <Logo logoImg={logo}/>
            <Loggin user={user} outLink={outLink} logOutFunc={logOutFunc} customClass={customClass}/>
        </div>
        );
    }
}