import React, { Component } from 'react';
import PropTypes from "prop-types";

//styles
import "./InputField.css";

const redStyle = "2px solid #d12121";
const styleCommon = "2px solid #aaaaaa";

class InputField extends Component {
    state = {
        myClassName: "visually-hidden",
        styleNow: ""
    };

    handleChange = (e) => {
        const { value } = e.target

        this.setState({ styleNow : value.length === 0 ? redStyle : styleCommon });
        this.setState({ myClassName : value.length === 0 ? "visually-show" : "visually-hidden" });
    }

    handleBlur = (event) => {
        const { value } = event.target

        let regExp = new RegExp(this.props.regExp);
        this.props.valFunc( this.props.name, regExp.test(value) ? value : false );
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
                    onBlur = { this.handleBlur }
                 />
                <label 
                className={this.state.myClassName}
                >«* enter</label>
            </div>
        );
    }
}

InputField.propTypes = {
    inputType: PropTypes.string.isRequired,
    labelValue: PropTypes.string.isRequired,
    valFunc: PropTypes.func.isRequired,
    regExp: PropTypes.string.isRequired
}


export default InputField;