import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//component
import CourseItem from "./item/CourseItem";

//styles
import "./Courses.css";


export default class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName : null,
      videocourses: [
        {
          title:"Видеокурс 1",
          createDate:"yes yes yes",
          duration:"76", 
          listOfAuthors:"author1 authorEast authorSouth"
        }
        ,
        {
          title:"Header from ...",
          createDate:"yes yes",
          duration:"77", 
          listOfAuthors:"author1 authorEast"
        }
        ,
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

  logout = event => {
    event.preventDefault();
    this.props.history.push('/login');
    localStorage.setItem('loginName', "log out");
    localStorage.setItem('authmock', false);
  }

  eachItem(item, i) {
    return <CourseItem key={i}
              title={item.title}
              createDate={item.createDate}
              duration={item.duration}
              listOfAuthors={item.listOfAuthors}
            />
  }

  componentWillMount() {
    let tmp = localStorage.getItem("loginName");
    this.setState( { "userName" : tmp });
  }

  render() {
    return (
      <div className="Courses">
        { this.state.userName }
        <Button onClick={this.logout.bind(this)}>
          logout
        </Button>
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