import React from 'react';
import { Container, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import RegisterForm from './RegisterForm.jsx';
import {Redirect} from 'react-router-dom';
import '../../../client/main.css';


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
 
  render() {
    return (
      <div className="LoginRegForm">
      {this.renderRedirect()}
      <Container>
      <h1 style={{"marginBottom":"30px"}}>Login</h1>
      <Form onSubmit = {this.onSubmit}>
        <FormGroup style={{"marginBottom":"30px"}}>
          <Input type="text" name="username" id="username" placeholder="username" />
        </FormGroup>
        <FormGroup style={{"marginBottom":"30px"}}>
          <Input type="password" name="password" id="password" placeholder="password" />
        </FormGroup>
        <Button style={{"marginBottom":"30px", "backgroundColor":"#FF671F"}} className="buttonOr">Submit</Button>
        
      </Form>
      </Container>
      </div>
    );
  }
}