import React, { Component } from 'react';

//styles
import './SearchWithButton.css';

export class SearchWithButton extends Component {
        returnValue = () => {
                this.props.searchFunc(this.input.value);
        }

        render() {
                const {
                        customPlaceholder,
                        buttonText,
                } = this.props;

                return (
                        <div>
                                <input type="text" placeholder={customPlaceholder} className='search-field' ref={node => (this.input = node)}/>
                                <button className='search-button' onClick={this.returnValue}>{buttonText}</button>
                        </div>
                );
        }
}