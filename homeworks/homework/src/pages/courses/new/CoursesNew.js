import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { createCourse } from '../../../reducers/actionTypes';

//styles
import "./CoursesNew.css";

class CoursesNewPage extends Component {

        handleSubmit = (event) => {
                event.preventDefault();
                this.props.history.push('/courses');
        }

        render() {
                return (
                        <form onSubmit={this.handleSubmit}>
                                <div className='equalHMVWrap'>
                                        <label className='equalHMV'> Название </label>
                                        <input className='equalHMV' type='text' placeholder='Text input'></input>
                                </div>
                                <div className='equalHMVWrap'>
                                        <label className='equalHMV'> Описание </label>
                                        <textarea className='equalHMV' placeholder="Text area"></textarea>
                                </div>
                                <div className='equalHMVWrap'>
                                        <label className='equalHMV'> Дата </label>
                                        <input className='equalHMV' type='text' placeholder="5.12.2014"></input>
                                </div>
                                <div className='equalHMVWrap'>
                                        <label className='equalHMV'> Продолжительность </label>
                                        <input className='equalHMV' type='text' placeholder="183"></input>
                                        <label className='equalHMV'> 3 часа 3 минуты </label>
                                </div>

                                <div className="complexDiv">
                                        <div className="leftDiv">
                                                <p>1232</p>
                                                <p>2</p>
                                                <p>3</p>
                                        </div>
                                        <div className="middleDiv">
                                                <span> > </span>
                                                <span> > </span>
                                        </div>
                                        <div className="rightDiv">
                                                <p>4</p>
                                        </div>
                                </div>
                                <input type="submit" value="Сохранить" />
                                <Link to="/courses" className='link-to'> Отменить </Link>
                        </form>
                );
        }
}

const mapDispatchToProps = {
        createCourse
}

export const CoursesNew = connect(null, mapDispatchToProps)(CoursesNewPage);