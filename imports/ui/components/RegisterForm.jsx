import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';


export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.setRedirect = this.setRedirect.bind(this);
        this.state = {
          isOpen: false,
          redirect: false,
        };
      }
   
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }
    
    onSubmit(e) {
        e.preventDefault();
        const ele = $(e.target);
        
        const username = ele.find("#username").val();
        const password = ele.find("#password").val();
        const confirmPassword = ele.find("#confirmPassword").val();

        if (password === confirmPassword && password !== "" && confirmPassword !== "") {
            let accountInfo = {
                username: username,
                password: password
            };
            Accounts.createUser(accountInfo, function (er, result) {
                if (er) {
                    alert(er.reason)
                }
                else {
                    Meteor.call('stages.createStages');
                    
                }
            });
        } else {
            alert("your passwords don't match")
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <h1 className="textC">Register</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="Enter your username" />
                    </FormGroup>
              <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="Enter a password" />
              </FormGroup>
              <FormGroup>
                  <Label for="examplePassword">Confirm Password</Label>
                  <Input type="password" name="password" id="confirmPassword" placeholder="Confirm password" />
              </FormGroup>
              <Button>Submit</Button>
          </Form>
          </div>
    );
  }
}