import React, { Component } from "react";
import { Button, Form, Col, FormGroup, ControlLabel, Well } from "react-bootstrap";

import "./CourseItem.css";


class CourseItem extends Component {

    render() {
        return (
            <div className="CourseItem">
                <Well>
                    <Form horizontal>
                        <FormGroup bsSize="large" >
                            <Col sm={2} componentClass={ControlLabel}>
                                {this.props.title}
                            </Col>
                            <Col sm={2} componentClass={ControlLabel}>
                                {this.props.duration}
                            </Col>
                            <Col sm={3} componentClass={ControlLabel}>
                                {this.props.createDate}
                            </Col>
                            <Col sm={2} componentClass={ControlLabel}>
                                <Button>Редактировать</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup bsSize="large" >
                            <Col sm={8} componentClass={ControlLabel}>
                                {this.props.listOfAuthors}
                            </Col>
                            <Col sm={2} componentClass={ControlLabel}>
                                <Button>Удалить</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Well>
            </div>
        );
    }
}

export default CourseItem;