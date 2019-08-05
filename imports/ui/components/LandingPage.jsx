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

import { Redirect } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
<i class="fas fa-file-alt"></i>

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      isOpen: false,
      redirect: false,
    };
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onClick() {
    Meteor.logout(() => {
      this.setRedirect();
    });

    
  }

    render() {
        return ( 
        <div style={{"backgroundColor":"#003DA5", "color":"white"}}>
        <div>
        {this.renderRedirect()}
        <Navbar className= "change" dark expand="md">
          <NavbarBrand href="/">shortlist</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem className = "nav-item">
                <NavLink className ="nav-link" href="/login">login</NavLink>
              </NavItem>
              <NavItem className ="nave-item">
                <NavLink className="nav-link" href="/register">sign-up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
            <BrowserRouter>
            <div className="landing-page">
                <Route exact path='/' render={
                        () => {
                            return (
                                <div id="landing-page-header">
                                    <h1>We help job seekers stay organized.</h1>
                                    <h4>Shortlist supports job applicants - helping them keep track of job application status, dates and documents all in one place.</h4>
                                    {/* <Row>
                                    <Col>
                                        <h2>Already registered?</h2>
                                        <Button href='/login'>Login</Button>
                                        {/* <NavItem>
                                            <NavLink href='/login'> Login</NavLink>
                                        </NavItem> */}
                                    {/* </Col> */}
                                    {/* <Col>
                                        <h2>New?</h2>
                                        <Button href='/register'>Register</Button> */}
                                        {/* <NavItem>
                                        <NavLink href='/register'> Register </NavLink>
                                        </NavItem> */}
                                    {/* </Col>
                                    </Row> */}
                                </div>
                            )
                        }
                    } />
                <Route exact path='/register' component = {RegisterForm}/>
                <Route exact path='/login'component ={LoginForm}/>
                </div>
                </BrowserRouter>
                </div>
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