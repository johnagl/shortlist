import React from 'react';
import { Container, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx'

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            dashboard: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div className="landing-page">
                <div id="landing-page-header">
                <h1>Your job search just got a whole lot easier.</h1>
                <h3>Manage job applications with ease,<br />
                    stay organized,<br />
                    and keep track of it all with Shortlist.
               </h3>
               </div>
               <div>
                   </div>
                <Row>
                    <Col>
                        <h2>Already registered?</h2>
                        <React.Fragment>
                            <div className="loginbuttoncontainer">
                                <h2 className="loginButton" style={{ 'cursor': 'pointer', 'color': 'blue' }} onClick={this.toggle}>Login</h2>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}></ModalHeader>
                                    <ModalBody>
                                        <LoginForm toggle={this.toggle} />
                                    </ModalBody>
                                </Modal>
                            </div>
                        </React.Fragment>
                    </Col>
                    <Col>
                        <h2>New?</h2>
                        <React.Fragment>
                            <div className="registerbuttoncontainer">
                                <h2 className="registerButton" style={{ 'cursor': 'pointer', 'color': 'blue' }} onClick={this.toggle}>Register</h2>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}></ModalHeader>
                                    <ModalBody>
                                        <RegisterForm toggle={this.toggle} />
                                    </ModalBody>
                                </Modal>
                            </div>
                        </React.Fragment>
                    </Col>
                </Row>
            </div>
        );
    }
}