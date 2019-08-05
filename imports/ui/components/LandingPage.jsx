import React from 'react';
import { Container, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../../client/main.css';
// import './calendar.jpg';
// import dashboard from 'dashboard.jpg'
// import Documents from './documents.jpg'

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
                <Row style={{"backgroundColor":"white", "padding":"30px", "alignItems":"center"}}>
                    <Col><img src="https://scontent.fcxh2-1.fna.fbcdn.net/v/t1.15752-9/67609771_710910519370211_4970681392439492608_n.jpg?_nc_cat=103&_nc_oc=AQlZa-eHrlV3AoO_GHshKDZ1q9Ox_5n2GlX8MmGfSUPh7lRpoQq-iNfV356TvSJoI4g&_nc_ht=scontent.fcxh2-1.fna&oh=41feb87cbffb91692a3f5fbc5278d22f&oe=5DEBC048" width="640" height="288"/></Col>
                <Col><h1 style={{"textAlign":"center", "color":"black"}}>Visually organize and interact with your job applications</h1></Col>
                </Row>
                <Row style={{"backgroundColor":"orange", "padding":"30px", "alignItems":"center"}}>
                <Col><h1 style={{"textAlign":"center"}}>Easily keep track of deadlines and interview dates.</h1></Col>
                <Col>
                <img src='https://scontent.fcxh2-1.fna.fbcdn.net/v/t1.15752-9/68404459_2898500966889051_6414709483947163648_n.jpg?_nc_cat=101&_nc_oc=AQlZ-f8Op7q0fFHMJTeEKt8ZRcqClTUuH3Ymu_G26cp1DWK2wchklc8QpTHuGyVWfHk&_nc_ht=scontent.fcxh2-1.fna&oh=f94c5a833b90879d4056c5850feb84a8&oe=5DD16E8D' width="640" height="288"></img>
                </Col>
                </Row>
                <Row style = {{"backgroundColor":"white","padding":"30px", "alignItems":"center"}}>
                <Col><img src="https://scontent.fcxh2-1.fna.fbcdn.net/v/t1.15752-9/67959135_1057421601122520_1079488743645118464_n.png?_nc_cat=103&_nc_oc=AQncNUc0sGVnwl6RkyAH1SvK7DWBU7Avi2JUNYwi5P8KcH0hKbPkzklQiS0ibwnTC3o&_nc_ht=scontent.fcxh2-1.fna&oh=40326c29c0d004bd4d851dd6e49093b0&oe=5DD10597" width="640" height="288"></img></Col>
                <Col><h1 style={{"textAlign":"center", "color":"black"}}>Keep track of all your important job documents with each application.</h1></Col>
                </Row>
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