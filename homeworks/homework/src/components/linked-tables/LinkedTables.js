import React, { Component } from 'react';

//styles
import './LinkedTables.css';

//images
import left from '../../img/left.png';
import rigth from '../../img/rigth.jpg';

export class LinkedTables extends Component {
        handleBlur = (event) => {
                const { value } = event.target;
                this.props.returnFunc( this.props.name, value );
        }

        render() {
                return (
                        <div className="equalHMVWrap">
                                <label className='equalHMV textAlighCenter'> Список авторов </label>
                                <select className="authorForm" multiple size={ this.props.authors.length } ref={node => (this.leftField = node)}>
                                        { this.props.leftTable.map(this.props.eachAuthorFunc)}
                                </select>
                                <div className="bridge">
                                        <span><img src={left} onClick={ () => this.props.leftHandler(this.rightField.selectedOptions) }/></span>
                                        <span><img src={rigth} onClick={ () => this.props.rightHandler(this.leftField.selectedOptions) }/></span>
                                </div>
                                <select className="authorForm" multiple size={ this.props.authors.length } ref={node => (this.rightField = node)}>
                                        { this.props.rightTable.map(this.props.eachAuthorFunc)}
                                </select>
                        </div>
                );
        }
}