import React, { Component } from 'react';
import PropTypes from "prop-types";

//styles
import "./CourseItem.css";

class CourseItem extends Component {

        handleUpdate = () => {
                this.props.editFunc(this.props.index)
        }

        handleDelete = () => {
                this.props.delFunc(this.props.index);
        }

        render() {
                const {
                        title,
                        duration,
                        createDate,
                        listOfAuthors,
                } = this.props;

                return (
                        <div className="CourseItem">
                                <div>
                                        <label>
                                                { title }
                                        </label>
                                        <label>
                                                { duration }
                                        </label>
                                        <label>
                                                { createDate }
                                        </label>
                                        <button onClick={ this.handleUpdate }>
                                                Редактировать
                                        </button>
                                </div>
                                <div>
                                        <label>
                                                { listOfAuthors }
                                        </label>
                                        <button onClick={ this.handleDelete }>
                                                Удалить
                                        </button>
                                </div>
                        </div>
                )
        }
}

CourseItem.propTypes = {
        title : PropTypes.string.isRequired,
        duration : PropTypes.number.isRequired,
        createDate : PropTypes.string.isRequired,
        // listOfAuthors : PropTypes.array.isRequired
        editFunc : PropTypes.func.isRequired,
        editFunc : PropTypes.func.isRequired,
        index : PropTypes.number.isRequired
}


export default CourseItem;
