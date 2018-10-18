import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { COURSES_ALL } from '../../../constants/PathConstants';
import { createCourse, updateCourse } from '../../../reducers/actionTypes';
import { courseSelector, authorSelector } from '../../../selectors/Selector';

//components
import { InputWithLeftLabel } from '../../../components/input-text-with-left-label/InputWithLeftLabel';
import { InputTextareaWithLeftLabel } from '../../../components/input-textarea-with-left-label/InputTextareaWithLeftLable';
import { InputWithLables } from '../../../components/input-text-with-labels/InputWithLables';
import { LinkedTables } from '../../../components/linked-tables/LinkedTables';

//styles
import "./CoursesNew.css";


class CoursesNewPage extends Component {

        state = {
                leftAuthorForm: [],
                rightAuthorForm: [],
                course: {}
        }

        componentWillMount() {
                const id = this.props.match.params.id;
                let foundCourse = this.props.courses.find(item => item.id == id);
                
                if (foundCourse === undefined && id !== 'new') {
                        this.props.history.push(`${COURSES_ALL}`)
                }
                if (foundCourse != undefined) {
                        this.setState({
                                course: foundCourse,
                                leftAuthorForm: this.props.authors.filter(item => {
                                        return foundCourse.listOfAuthors.indexOf(item) < 0;
                                }),
                                rightAuthorForm: foundCourse.listOfAuthors
                        })  
                } else {
                        this.setState({
                                course: {},
                                leftAuthorForm: this.props.authors
                        })
                }
        }

        getError = (value, regExpression) => {
                let regExp = new RegExp(regExpression);
                return regExp.test(value);
        }
        
        handleChange = (returnName, returnValue) => {
                this.setState(prevState => ({
                        course: {
                                ...prevState.course,
                                [returnName] : returnValue
                        }

                }));
        }

        handleSubmit = (event) => {
                event.preventDefault();
                
                if (this.state.course !== undefined
                        && this.getError(this.state.course.title, /^[A-Za-zА-Яа-я 0-9]+$/) 
                        && this.getError(this.state.course.createDate, /^\d{1,2}\.{1}\d{1,2}\.{1}\d{4}$/)
                        && this.getError(this.state.course.duration, /^\d+$/)) {

                        if (this.props.match.params.id === 'new') {
                                this.props.createCourse({
                                        id: this.props.courses.length,
                                        title: this.state.course.title,
                                        description: this.state.course.description,
                                        createDate: this.state.course.createDate,
                                        duration: +this.state.course.duration, 
                                        listOfAuthors: this.state.rightAuthorForm
                                })
                        } else {
                                this.props.updateCourse({
                                       id: this.state.course.id,
                                       content: {
                                                id: this.state.course.id,
                                                title: this.state.course.title,
                                                description: this.state.course.description,
                                                createDate: this.state.course.createDate,
                                                duration: +this.state.course.duration, 
                                                listOfAuthors: this.state.rightAuthorForm
                                        } 
                                })
                        }
                        this.props.history.push(`${COURSES_ALL}`);
                } else {
                        alert('error message');
                }

        }

        eachAuthor = (item, i) => {
                return <option key={i}>{item}</option>;
        }

        leftHandler = (returnValue) => {
                const selectedAuthors = Array.from(returnValue).map(o => o.value);
                this.setState({
                        leftAuthorForm: this.state.leftAuthorForm.concat(selectedAuthors),
                        rightAuthorForm:this.state.rightAuthorForm.filter(item => {
                                return selectedAuthors.indexOf(item) < 0;
                        })
                })
        }

        rightHandler = (returnValue) => {
                const selectedAuthors = Array.from(returnValue).map(o => o.value);
                this.setState({
                        leftAuthorForm: this.state.leftAuthorForm.filter(item => {
                                return selectedAuthors.indexOf(item) < 0;
                        }),
                        rightAuthorForm: this.state.rightAuthorForm.concat(selectedAuthors)
                })
        }

        render() {
                const {
                        authors     
                } = this.props;

                const {
                        leftAuthorForm,
                        rightAuthorForm,
                        course
                } = this.state;

                return (
                        <form onSubmit={this.handleSubmit}>
                                <InputWithLeftLabel name='title' leftLabelText='Название' val={(course && course.title)} customPlaceholder='Text input' returnFunc={this.handleChange}/>
                                <InputTextareaWithLeftLabel name='description' leftLabelText='Описание' val={(course && course.description)} customPlaceholder='Text area' returnFunc={this.handleChange}/>
                                <InputWithLeftLabel name='createDate' leftLabelText='Дата' val={(course && course.createDate)} customPlaceholder='5.12.2014' returnFunc={this.handleChange}/>
                                <InputWithLables name='duration' leftLabelText='Продолжительность' val={(course && course.duration)} rightLabelText='3 часа 3 минуты' customPlaceholder='183' returnFunc={this.handleChange}/>
                                <LinkedTables authors={authors} leftTable={leftAuthorForm} leftHandler={this.leftHandler}
                                                                rightTable={rightAuthorForm} rightHandler={this.rightHandler}
                                                                eachAuthorFunc={this.eachAuthor}/>
                                <input type="submit" value="Сохранить" />
                                <Link to={ COURSES_ALL } className='link-to'> Отменить </Link>
                        </form>
                );
        }
}

const mapGlobalStoreStateToProps = (globalStore) => {
        return {
                authors : authorSelector(globalStore),
                courses: courseSelector(globalStore)
        }
}

const mapDispatchToProps = {
        createCourse,
        updateCourse
}

export const CoursesNew = connect(mapGlobalStoreStateToProps, mapDispatchToProps)(CoursesNewPage);
