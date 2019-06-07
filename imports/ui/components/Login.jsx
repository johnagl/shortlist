import React from 'react';
const button = {
        span : "active",
        marginTop : "15px",
        width: "auto"
    }
const aroundLogin = {
        border : "black",
        display : "inlineBlock",
        textAlign : "center",
        border: "5px solid red",
        width: "50%"
        }
class Login extends React.Component {
    render() {
        return (
            <div style = {aroundLogin}>
                <h1>LOGIN</h1>
                <p>Username:</p>
                <input type="text" placeholder="Enter Username"></input>
                <p>Password:</p>
                <input type="text" placeholder="Enter Password"></input>
                <div><button style={button}>Login</button> </div>
                <h5>Don't have an account? Sign up here</h5>
            </div>
        )
    }
}
export default Login;