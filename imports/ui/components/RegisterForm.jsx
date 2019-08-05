import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';


export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.setRedirect = this.setRedirect.bind(this);
        this.state = {
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
      aroundLogin = {
          color:"black",
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
                    this.setRedirect();
                    Meteor.call('stages.createStages');
                    
                }
            });
        } else {
            alert("your passwords don't match")
        }
    }
    render() {
        return (
            <div style = {this.aroundLogin}>
                {this.renderRedirect()}
                <h1 className="textC">Register</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        {/* <Label for="username">Username</Label> */}
                        <Input type="text" name="username" id="username" placeholder="Enter your username" />
                    </FormGroup>
              <FormGroup>
                  {/* <Label for="examplePassword">Password</Label> */}
                  <Input type="password" name="password" id="password" placeholder="Enter a password" />
              </FormGroup>
              <FormGroup>
                  {/* <Label for="examplePassword">Confirm Password</Label> */}
                  <Input type="password" name="password" id="confirmPassword" placeholder="Confirm password" />
              </FormGroup>
              <Button>Submit</Button>
          </Form>
          </div>
    );
  }
}