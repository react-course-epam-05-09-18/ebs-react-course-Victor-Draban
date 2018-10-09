import React, { Component } from 'react';

//styles
import  './Logo.css';

export class Logo extends Component {
        render() {
                return (
                        <div>
                                <img src={this.props.logoImg} className="App-logo" alt="logo"/>
                                <label className="label-logo">Logo</label>
                        </div>
                );
        }
}