import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from "react-bootstrap";
import "./CoursesNew.css";

export default class CoursesNew extends Component {

  render() {
    return (
      // <div className="CoursesNew">
        /*{ <Form horizontal>
            <FormGroup bsSize="large">
              <Col sm={2} componentClass={ControlLabel}>
                Название
              </Col>
              <Col sm={8}>
                <FormControl
                type="text"
                placeholder="Text input"
                />
              </Col>
            </FormGroup>
            <FormGroup bsSize="large">
              <Col sm={2} componentClass={ControlLabel}>
                Описание
              </Col>
              <Col sm={8}>
                <FormControl
                  type="textarea"
                  placeholder="Text area"
                />
              </Col>
            </FormGroup>
            <FormGroup bsSize="large">
              <Col sm={2} componentClass={ControlLabel}>
                Дата
              </Col>
              <Col sm={8}>
                <FormControl
                type="text"
                placeholder="25.12.2014"
                />
              </Col>
            </FormGroup>
            <FormGroup bsSize="large">
              <Col sm={2} componentClass={ControlLabel}>
                Продолжительность
              </Col>
              <Col sm={8}>
                <FormControl
                type="text"
                placeholder="183"
                />
              </Col>
              <Col sm={2} componentClass={ControlLabel}>
                3 часа 3 минуты
              </Col>
            </FormGroup>
            <FormGroup bsSize="large">
              <Col sm={2} componentClass={ControlLabel}>
                Список авторов
              </Col>
              <Col sm={4}>
                <FormControl
                type="textarex"
                placeholder="Иванов \n Петров"
                />
              </Col>
              <Col sm={4}>
                <FormControl
                type="textarex"
                placeholder="Лермонтов \n Пушкин"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={2}>
                <Button 
                  type="button"
                  >Сохранить
                </Button>
              </Col>
              <Col sm={2}>
                <Button 
                  type="button"
                  >Отмена
                </Button>
              </Col>
            </FormGroup>
          </Form> }*/
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
      // </div>
    );
  }
}