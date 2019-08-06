import React from 'react';
import { Container, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import RegisterForm from './RegisterForm.jsx';
import {Redirect} from 'react-router-dom';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.setRedirect = this.setRedirect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      modal: false,
      dashboard: false,
      redirect: false,
    };
    this.toggle = this.toggle.bind(this);

  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
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
    console.log(this);

    Meteor.loginWithPassword(username, password, (er) => {
      if (er) {
        alert(er.reason);
      } else {
        this.setRedirect();
        // console.log('success');
      }
    });
  }
  aroundLogin = {
    // background: "white",
    color: "white",
    border: "1px",
    padding: "10%",
    display : "inlineBlock",
    textAlign : "center",
    width: "50%",
    margin: "auto auto",
    // marginTop: "15px",
    opacity: "0.9"
    }
  render() {
    // console.log('LOGIN FORM CURRENTUSER: ' + this.props.currentUser);
    // console.log('LOGIN FORM STAGESLIST: ' + this.props.stagesList);
    return (
      <div style = {this.aroundLogin}>
      {this.renderRedirect()}
      <Container>
      <h1>Login</h1>
      <Form onSubmit = {this.onSubmit}>
        <FormGroup>
          {/* <Label for="username">Username</Label> */}
          <Input type="text" name="username" id="username" placeholder="Enter username" />
        </FormGroup>
        <FormGroup>
          {/* <Label for="examplePassword">Password</Label> */}
          <Input type="password" name="password" id="password" placeholder="Enter password" />
        </FormGroup>
        <Button>Submit</Button>
        {/* <React.Fragment>
        <div className = "registerbuttoncontainer">
          <a className="registerButton" style={{'cursor':'pointer', 'color':'blue'}} onClick={this.toggle}>Register by clicking here</a>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}></ModalHeader>
              <ModalBody>
                <RegisterForm toggle={this.toggle}/>
              </ModalBody>
          </Modal>
        </div>
      </React.Fragment> */}
        
      </Form>
      </Container>
      </div>
    );
  }
}