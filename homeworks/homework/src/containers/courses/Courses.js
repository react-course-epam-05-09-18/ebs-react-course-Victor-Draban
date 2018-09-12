import React, { Component } from "react";
import CourseItem from "./item/CourseItem";
import { Link } from "react-router-dom";
import "./Courses.css"
import { Button } from "react-bootstrap";

export default class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videocourses: [
        {
          title:"Видеокурс 1",
          createDate:"yes yes yes",
          duration:"76", 
          listOfAuthors:"author1 authorEast authorSouth"
        }
        // ,
        // {
        //   title:"Header from ...",
        //   createDate:"yes yes",
        //   duration:"77", 
        //   listOfAuthors:"author1 authorEast"
        // },
        // {
        //   title:"Header ...",
        //   createDate:"yes",
        //   duration:"78", 
        //   listOfAuthors:"author1"
        // },
        // {
        //   title:"...",
        //   createDate:"...",
        //   duration:"99", 
        //   listOfAuthors:"..."
        // }
      ]
    };
  }

  createMy() {
    let arr = this.state.videocourses;
    arr.push ({ 
                title:"new",
                createDate:"new",
                duration:"new",
                listOfAuthors:"new"
              });
    this.setState( { videocourses : arr } )
  }

  eachItem(item, i) {
    return <CourseItem key={i}
              title={item.title}
              createDate={item.createDate}
              duration={item.duration}
              listOfAuthors={item.listOfAuthors}
            />
  }

  render() {
    return (
      <div className="Courses">
        <div className="lander">
          <Button onClick={this.createMy.bind(this)}>
            Create New
          </Button>
          <Link to="/courses/new">
            Добавить курс
          </Link>
          <div className="logo">
              Logo, Courses, logoff
          </div>
          <div className="">
              Фрагмент имени или дата, найти, добавить курс
          </div>
          <div>
            {this.state.videocourses.map(this.eachItem)}
          </div>
        </div>
      </div>
    );
  }
}