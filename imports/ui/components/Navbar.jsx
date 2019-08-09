import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
<i className="fas fa-file-alt"></i>

export default class Example extends React.Component {
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
      <div>
        {this.renderRedirect()}
        <Navbar className= "change" dark expand="md">
          <NavbarBrand href="/home"><FontAwesomeIcon icon={faBriefcase} style={{"color":"FF671F"}}/>  shortlist</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-left" navbar>
              <NavItem>
                <NavLink href="/home" ><FontAwesomeIcon icon={faTh}/> jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/calendar"><FontAwesomeIcon icon={faCalendarAlt}/> calendar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/documents"><FontAwesomeIcon icon={faFileAlt}/> documents</NavLink>
              </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
              <NavItem>              
                <NavLink className="nav-link active" className="logout" onClick = {this.onClick}>logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
