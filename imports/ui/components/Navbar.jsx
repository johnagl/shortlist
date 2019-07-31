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
          <NavbarBrand href="/">shortlist</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-left" navbar>
              <NavItem>
                <NavLink href="/calendar">calendar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/documents">documents</NavLink>
              </NavItem>
              <NavItem >              
                <NavLink onClick = {this.onClick}>logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
