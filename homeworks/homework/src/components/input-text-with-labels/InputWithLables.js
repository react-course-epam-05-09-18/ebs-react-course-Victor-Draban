import React, { Component } from 'react';

//styles
import './InputWithLables.css';

export class InputWithLables extends Component {
        handleEvent = (event) => {
                const { value } = event.target;

                this.props.returnFunc( this.props.name, value );
        }

        render() {
                return (
                        <div className='equalHMVWrap'>
                                <label className='equalHMV textAlighCenter'> { this.props.leftLabelText } </label>
                                <input className='equalHMV' type='text' value={this.props.val} placeholder={this.props.customPlaceholder} onChange={this.handleEvent}></input>
                                <label className='equalHMV'> { this.props.rightLabelText } </label>
                        </div>
                );
        }
}