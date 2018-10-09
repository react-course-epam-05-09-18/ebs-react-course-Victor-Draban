import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { COURSES_NEW, COURSES_ALL } from '../../constants/PathConstants';
import { deleteCourse } from '../../reducers/actionTypes';

//component
import CourseItem from '../../components/course-item/CourseItem';
import { SearchWithButton } from '../../components/search-field-with-button/SearchWithButton';

//styles
import "./Courses.css";

class CoursesPage extends Component {

  state = {
    videocourses: this.props.videocourses
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.videocourses !== this.props.videocourses) {
      this.setState( {videocourses: nextProps.videocourses} )
    }
  }

  makeSearch = (event) => {
    this.setState({
      videocourses: this.props.videocourses.filter(item => item.title.startsWith(this.input.value))
    })
  }

  eachItem = (item, i) => {
    return <CourseItem key={i}
              title={item.title}
              createDate={item.createDate}
              duration={item.duration}
              listOfAuthors={item.listOfAuthors.join(' ')}
              index={i}
              editFunc={ (returnValue) =>
                this.props.history.push(`${COURSES_ALL}/${returnValue}`)
              }  
              delFunc={ (returnValue) => 
                this.props.deleteCourse(returnValue) 
              }
              />
  }

  render() {
    const {
      videocourses,
    } = this.state;

    return (
      <div className="Courses">
        <div className="lander">
          <div>
              <SearchWithButton />
              {/* <input type="text" placeholder='Фрагмент имени или дата' className='search-field' ref={node => (this.input = node) }/>
              <button className='search-button' onClick={ this.makeSearch }>Найти</button> */}
              <Link to={ COURSES_NEW } className='link-to'> Добавить курс </Link>
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
  deleteCourse
}

export const Courses = connect(mapGlobalStoreStateToProps, mapDispatchToProps)(CoursesPage);