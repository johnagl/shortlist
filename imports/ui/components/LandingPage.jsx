import React from 'react';
import { Container, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../../client/main.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


export default class LandingPage extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div className="landing-page">
                <Route exact path='/' render={
                        () => {
                            return (
                                <div id="landing-page-header">
                                    <h1>Your job search just got a whole lot easier.</h1>
                                    <h3>Manage job applications with ease, stay organized, and keep track of it all with Shortlist.</h3>
                                    <Row>
                                    <Col>
                                        <h2>Already registered?</h2>
                                        <Button href='/login'>Login</Button>
                                        {/* <NavItem>
                                            <NavLink href='/login'> Login</NavLink>
                                        </NavItem> */}
                                    </Col>
                                    <Col>
                                        <h2>New?</h2>
                                        <Button href='/register'>Register</Button>
                                        {/* <NavItem>
                                        <NavLink href='/register'> Register </NavLink>
                                        </NavItem> */}
                                    </Col>
                                    </Row>
                                </div>
                            )
                        }
                    } />
                <Route exact path='/register' component = {RegisterForm}/>
                <Route exact path='/login'component ={LoginForm}/>
                </div>
                </BrowserRouter>
        )};
}
        
        
{/* <div id="landing-page-header">
                    <h1>Your job search just got a whole lot easier.</h1>
                    <h3>Manage job applications with ease,<br />
                        stay organized,<br />
                        and keep track of it all with Shortlist.
               </h3>
                </div> */}

{/* <Row>
    <BrowserRouter>
        <Col>
            <h2>Already registered?</h2>
            <Route path='/login' exact strict component={LoginForm} />
            <NavItem>
                <NavLink href='/login'> Login</NavLink>
            </NavItem>
        </Col>
        <Col>
            <h2>New?</h2>
            <a href='/register' exact strict> Register </a>
        </Col>
    </BrowserRouter>
</Row> */}