import React from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import RegisterForm from './RegisterForm.jsx'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
    const email = el.find("#email").val();
    const password = el.find("#password").val();

    Meteor.loginWithPassword(email, password, (er) => {
      if (er) {
        alert(er.reason);
      } else {
        console.log("success")
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
    return (
      <div style = {this.aroundLogin}>
      <Container>
      <h1>Login</h1>
      <Form onSubmit = {this.onSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter email" />
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