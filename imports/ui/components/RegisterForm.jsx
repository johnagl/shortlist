import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Meteor } from 'meteor/meteor';

export default class RegisterForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        const ele = $(e.target);
        
        const email = ele.find("#email").val();
        const password = ele.find("#password").val();
        const confirmPassword = ele.find("#confirmPassword").val();

        if (password === confirmPassword && password !== "" && confirmPassword !== "") {
            let accountInfo = {
                email: email,
                password: password
            };
            Accounts.createUser(accountInfo, function (er, result) {
                if (er) {
                    alert("There was an error making your account")
                }
                else {
                    // console.log(result);
                    //redirect
                    //Meteor method that creates stages
                    // console.log("success");
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
                <h1 className="textC">Register</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter your email address" />
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