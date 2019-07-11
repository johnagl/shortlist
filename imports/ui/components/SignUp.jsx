import React from 'react';

const button = {
    span : "active",
    marginTop : "15px",
    marginBottom : "15px",
    width : "auto"
}

const aroundSignUp = {
    border : "black",
    display : "inlineBlock",
    textAlign : "center",
    border: "5px solid red",
    width: "50%"
}

class SignUp extends React.Component {
    render() {
        return (
            <div style = {aroundSignUp}>
                <h1>SIGNUP</h1>
                <p>Email:</p>
                <input type="text" placeholder="Enter a Valid Email Address"></input>
                <p>Username:</p>
                <input type="text" placeholder="Enter Username"></input>
                <p>Password:</p>
                <input type="text" placeholder="Enter Password"></input>
                <p>Confirm Password:</p>
                <input type="text" placeholder="Enter Password Again"></input>
                <div><button style = {button}>Sign Up</button> </div>
            </div>
        )
    }
}

export default SignUp;