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
                                            <Row style={{ "backgroundColor": "white", "padding": "30px", "alignItems": "center", "marginRight":"0", "marginLeft":"0"}}>
                                                <Col><img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.15752-9/67777492_2431140800242262_3300235282355322880_n.jpg?_nc_cat=102&_nc_oc=AQly2roWMTp-AC6okIPs-B5s2OIDm24guEyQDjR0Ph1DxTsXOGWWu6KXtCkJfGtktAM&_nc_ht=scontent-sea1-1.xx&oh=05aa6c12aaa1bbaecdaab9deaac6319e&oe=5DE29940" width="640" height="288" /></Col>
                                                <Col><h1 style={{ "textAlign": "center", "color": "black" }}>Visually organize and interact with your job applications</h1></Col>
                                            </Row>
                                            <Row style={{ "backgroundColor": "orange", "padding": "30px", "alignItems": "center", "marginRight":"0", "marginLeft":"0"}}>
                                                <Col><h1 style={{ "textAlign": "center" }}>Easily keep track of deadlines and interview dates.</h1></Col>
                                                <Col>
                                                    <img src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.15752-9/68505374_2369825873104732_4450220163203072000_n.jpg?_nc_cat=106&_nc_oc=AQmfLViejUCIthz7EqgnoQ2rvIpvOZv8DgaqgR_4GxLIRRAmMCXnX3K7hx7m-Uj6Gv8&_nc_ht=scontent-sea1-1.xx&oh=1d63f69bc7e9e3b47de5f8c9fec25179&oe=5DE8455C' width="640" height="288"></img>
                                                </Col>
                                            </Row>
                                            <Row style={{ "backgroundColor": "white", "padding": "30px", "alignItems": "center", "marginRight":"0", "marginLeft":"0"}}>
                                                <Col><img src="https://scontent.fcxh2-1.fna.fbcdn.net/v/t1.15752-9/67959135_1057421601122520_1079488743645118464_n.png?_nc_cat=103&_nc_oc=AQncNUc0sGVnwl6RkyAH1SvK7DWBU7Avi2JUNYwi5P8KcH0hKbPkzklQiS0ibwnTC3o&_nc_ht=scontent.fcxh2-1.fna&oh=40326c29c0d004bd4d851dd6e49093b0&oe=5DD10597" width="640" height="288"></img></Col>
                                                <Col><h1 style={{ "textAlign": "center", "color": "black" }}>Keep track of all your important job documents with each application.</h1></Col>
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