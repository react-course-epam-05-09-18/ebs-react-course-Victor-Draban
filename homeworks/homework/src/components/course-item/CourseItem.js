import React, { Component } from 'react';
import PropTypes from "prop-types";

//styles
import "./CourseItem.css";

class CourseItem extends Component {

        handleUpdate = () => {
                this.props.editFunc(this.props.content.id)
        }

        handleDelete = () => {
                this.props.delFunc(this.props.content.id);
        }

        render() {
                const {
                        title,
                        duration,
                        createDate,
                        listOfAuthors,
                } = this.props.content;

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
                                                { listOfAuthors.join(', ') }
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
        content : PropTypes.object.isRequired,
        editFunc : PropTypes.func.isRequired,
        editFunc : PropTypes.func.isRequired,
}


export default CourseItem;
