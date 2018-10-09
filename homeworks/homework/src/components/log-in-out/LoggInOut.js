import React, { Component } from 'react';

export class Loggin extends Component {

        render() {
                return (
                        <div className={this.props.customClass}>
                                <label> user {this.props.user}</label>
                                <a href={this.props.outLink} onClick={this.props.logOutFunc}> logoff </a>
                        </div>
                );
        }
}