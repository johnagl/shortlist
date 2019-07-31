import React from 'react';
import { Container, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import RegisterForm from './RegisterForm.jsx';

export default class LoginForm extends React.Component {
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

  onSubmit(e) {
    e.preventDefault();
    const el = $(e.target);
    const username = el.find("#username").val();
    const password = el.find("#password").val();

    Meteor.loginWithPassword(username, password, (er) => {
      if (er) {
        alert(er.reason);
      } else {
        // console.log('success');
      }
    });
  }
  aroundLogin = {
    background: "white",
    border: "1px",
    padding: "10%",
    display : "inlineBlock",
    textAlign : "center",
    width: "50%",
    margin: "0 auto",
    marginTop: "15px",
    opacity: "0.9"
    }
  render() {
    // console.log('LOGIN FORM CURRENTUSER: ' + this.props.currentUser);
    // console.log('LOGIN FORM STAGESLIST: ' + this.props.stagesList);
    return (
      <div style = {this.aroundLogin}>
      <Container>
      <h1>Login</h1>
      <Form onSubmit = {this.onSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Enter username" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter password" />
        </FormGroup>
        <Button>Submit</Button>
        <React.Fragment>
        <div className = "registerbuttoncontainer">
          <a className="registerButton" onClick={this.toggle}>Register by clicking here</a>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}></ModalHeader>
              <ModalBody>
                <RegisterForm toggle={this.toggle}/>
              </ModalBody>
          </Modal>
        </div>
      </React.Fragment>
        
      </Form>
      </Container>
      </div>
    );
  }
}