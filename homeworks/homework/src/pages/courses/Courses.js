import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { COURSES_NEW, COURSES_ALL } from '../../constants/PathConstants';
import { deleteCourse } from '../../reducers/actionTypes';
import { courseSelector } from '../../selectors/Selector';

//component
import CourseItem from '../../components/course-item/CourseItem';
import { SearchWithButton } from '../../components/search-field-with-button/SearchWithButton';

//styles
import "./Courses.css";

class CoursesPage extends Component {

  state = {
    search : ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.videocourses !== this.props.videocourses) {
      this.setState( {videocourses: nextProps.videocourses} )
    }
  }

  makeSearch = (returnValue) => {
    this.setState({
      search: returnValue
    })
  }

  eachItem = (item, i) => {
    return <CourseItem key={i}
              content={item}
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
    } = this.props;

    return (
      <div className="Courses">
        <div className="lander">
          <div>
              <SearchWithButton customPlaceholder='Фрагмент имени или дата' buttonText='Найти' searchFunc={this.makeSearch}/>
              <Link to={ COURSES_NEW } className='link-to'> Добавить курс </Link>
          </div>
          <div className='courses-container'>
            { videocourses.filter(item => item.title.startsWith(this.state.search)).map(this.eachItem) }
          </div>
        </div>
      </div>
    );
  }
}

const mapGlobalStoreStateToProps = (globalStorage) => {
  return {
    videocourses : courseSelector(globalStorage)
  }
}

const mapDispatchToProps = {
  deleteCourse
}

export const Courses = connect(mapGlobalStoreStateToProps, mapDispatchToProps)(CoursesPage);