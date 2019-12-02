import React from 'react';
import { Row, Col } from 'reactstrap';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx'
import { BrowserRouter, Route } from 'react-router-dom';
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
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
<i className="fas fa-file-alt"></i>

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
            <div style={{ "backgroundColor": "#003DA5", "color": "white" }}>
                <div>
                    {this.renderRedirect()}
                    <Navbar className="change" dark expand="md">
                        <NavbarBrand href="/"><FontAwesomeIcon icon={faBriefcase} style={{"color":"FF671F"}}/>  shortlist</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" href="/login">login</NavLink>
                                </NavItem>
                                <NavItem className="nave-item">
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
                                        <div style={{"margin":"90px"}}>
                                            <h1>We help job seekers stay organized.</h1>
                                            <h4>Shortlist supports job applicants - helping them keep track of job application status, dates and documents all in one place.</h4>
                                        </div>
                                        <div>
                                            <Row className="loginRegRows" style={{ "backgroundColor": "white", "padding": "30px", "alignItems": "center", "marginRight":"0", "marginLeft":"0"}}>
                                                <Col><img src="https://i.imgur.com/e1NRoI8.jpg" width="640" height="288" /></Col>
                                                <Col><h1 style={{ "textAlign": "center", "color": "black" }}>Visually organize and interact with your job applications</h1></Col>
                                            </Row>
                                            <Row className="loginRegRows" style={{ "backgroundColor": "orange", "padding": "30px", "alignItems": "center", "marginRight":"0", "marginLeft":"0"}}>
                                                <Col><h1 style={{ "textAlign": "center" }}>Easily keep track of deadlines and interview dates</h1></Col>
                                                <Col>
                                                    <img src="https://i.imgur.com/HY3hwcf.jpg" width="640" height="288"></img>
                                                </Col>
                                            </Row>
                                            <Row style={{ "backgroundColor": "white", "padding": "30px", "alignItems": "center", "marginRight":"0", "marginLeft":"0"}}>
                                                <Col><img src="https://i.imgur.com/pjkujHl.png" width="640" height="288"></img></Col>
                                                <Col><h1 style={{ "textAlign": "center", "color": "black" }}>Keep track of all your important job application documents</h1></Col>
                                            </Row>
                                        </div>
                                    </div>
                                )
                            }
                        } />
                        <Route exact path='/register' component={RegisterForm}/>
                        <Route exact path='/login' component={LoginForm}/>
                    </div>
                </BrowserRouter>

            </div>
        )
    };
}