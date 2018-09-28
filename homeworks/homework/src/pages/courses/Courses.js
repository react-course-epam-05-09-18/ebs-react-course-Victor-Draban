import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { createCourse, deleteCourse } from '../../reducers/actionTypes';

//component
import CourseItem from '../../components/course-item/CourseItem';

//styles
import "./Courses.css";

const testValue = {
  title: "new",
  createDate: "new",
  duration: 4567, 
  listOfAuthors: "new new new"
}

class CoursesPage extends Component {

  eachItem = (item, i) => {
    return <CourseItem key={i}
              title={item.title}
              createDate={item.createDate}
              duration={item.duration}
              listOfAuthors={item.listOfAuthors}
              index={i}
              delFunc={ (returnValue) => this.props.deleteCourse(returnValue) }
              />
  }

  componentWillMount() {
    let tmp = localStorage.getItem("loginName");
    this.setState({ "userName" : tmp });
  }

  render() {
    const {
      videocourses,
      createCourse,
    } = this.props;
    
    return (
      <div className="Courses">
        <div className="lander">
          <Button onClick={() => { createCourse(testValue) }}> Create New </Button>
          <br />
          <br />
          <div className="">
              <input type="text" placeholder='Фрагмент имени или дата' className='search-field'/>
              <button className='search-button'>Найти</button>
              <Link to="/courses/new" className='link-to'> Добавить курс </Link>
          </div>
          <div className='courses-container'>
            { videocourses.map(this.eachItem) }
          </div>
        </div>
      </div>
    );
  }
}

const mapGlobalStoreStateToProps = (globalStorage) => {
  return {
    videocourses : globalStorage.reducerCourses.videocourses
  }
}

const mapDispatchToProps = {
  createCourse,
  deleteCourse
}

export const Courses = connect(mapGlobalStoreStateToProps, mapDispatchToProps)(CoursesPage);