import React, { Component } from 'react';

//styles
import './InputTextareaWithLeftLable.css';

export class InputTextareaWithLeftLabel extends Component {
        handleEvent = (event) => {
                const { value } = event.target;

                this.props.returnFunc( this.props.name, value );
        }

        render() {
                console.log('remder InputTextareaWithLeftLabel');
                return (
                        <div className='equalHMVWrap'>
                                <label className='equalHMV textAlighCenter'> { this.props.customText } </label>
                                <textarea className='equalHMV' value={this.props.val} placeholder={this.props.customPlaceholder} onChange={this.handleEvent}></textarea>
                        </div>
                );
        }
}