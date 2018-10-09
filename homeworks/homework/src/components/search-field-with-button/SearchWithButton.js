import React, { Component } from 'react';

//styles
import './SearchWithButton.css';

export class SearchWithButton extends Component {

        render() {
                return (
                        <div>
                                <input type="text" placeholder='Фрагмент имени или дата' className='search-field'/>
                                <button className='search-button'>Найти</button>
                        </div>
                );
        }
}