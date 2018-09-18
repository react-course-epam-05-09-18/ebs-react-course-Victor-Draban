import React, { Component } from 'react';
import PropTypes from "prop-types";

import "./InputField.css";

class InputField extends Component {
    state = {
        myClassName: "visually-hidden",
        myHide: "visually-hidden",
        myShow: "visually-show",
        styleNow: "",
        styleRed: "2px solid #d12121",
        styleCommon: "2px solid #aaaaaa"
    };

    static propTypes = {
        inputType: PropTypes.string.isRequired,
        labelValue: PropTypes.string.isRequired,
        valFunc: PropTypes.func.isRequired,
        regExp: PropTypes.string.isRequired
    }

    handleChange = (e) => {
        let result = this.state.myHide;
        let value = e.target.value;
        value = value.trim();

        if (value.length == 0) {
            result = this.state.myShow;
            this.setState( { styleNow :  this.state.styleRed} )
        } else {
            this.setState( { styleNow :  this.state.styleCommon} )
        }

        this.setState({
            myClassName : result
        })

        let regExp = new RegExp(this.props.regExp);

        if (regExp.test(value)) {
            this.props.valFunc(this.props.name, value)
        }
    }

    render() {
        return (
            <div>
                <label>
                    { this.props.labelValue }
                </label>
                <input
                    style = { {border: this.state.styleNow} }
                    type = { this.props.inputType }
                    placeholder = { this.props.labelValue }
                    onChange = { this.handleChange }
                    onFocus = { this.handleChange }
                 />
                <label 
                className={this.state.myClassName}
                >«* enter</label>
            </div>
        );
    }
}

export default InputField;