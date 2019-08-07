import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';
import '../../../client/main.css';



export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.setRedirect = this.setRedirect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
          return <Redirect to='/home' />
        }
      }
      aroundLogin = {
          color:"white",
        border: "1px",
        padding: "10%",
        display : "inlineBlock",
        textAlign : "center",
        width: "50%",
        margin: "auto auto",
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
            Accounts.createUser(accountInfo, (er, result) => {
                if (er) {
                    alert(er.reason)
                    return;
                }
                else {
                    Meteor.call('stages.createStages');
                    this.setRedirect();
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
                <h1 style={{"marginBottom":"30px"}} className="textC">Register</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup style={{"marginBottom":"30px"}}>
                        <Input type="text" name="username" id="username" placeholder="username" />
                    </FormGroup>
              <FormGroup style={{"marginBottom":"30px"}}>
                  <Input type="password" name="password" id="password" placeholder="password" />
              </FormGroup>
              <FormGroup style={{"marginBottom":"30px"}}>
                  <Input type="password" name="password" id="confirmPassword" placeholder="confirm password" />
              </FormGroup>
              <Button className="buttonOr" style={{"backgroundColor":"#FF671F"}}>Submit</Button>
          </Form>
          </div>
    );
  }
}