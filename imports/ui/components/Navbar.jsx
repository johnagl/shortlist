import React from 'react';
 
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
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onClick() {
    Meteor.logout();
  }
  render() {
    return (
      <div>
        <Navbar className= "change" dark expand="md">
          <NavbarBrand href="/">shortlist</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-left" navbar>
              <NavItem>
                <NavLink href="/map">map</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/calendar">calendar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.google.com/search?q=google+job+search&oq=google+job+search&aqs=&ibp=htl;jobs&sa=X&ved=2ahUKEwibzr-K_vriAhU7CTQIHTuIBS0QiYsCKAB6BAgHEAM#fpstate=tldetail&htidocid=hG5i5uLtYe8QnZ98AAAAAA%3D%3D&htivrt=jobs" target ="_blank">job search</NavLink>
              </NavItem>
              <NavItem >              
                <NavLink onClick = {this.onClick}>logout</NavLink>
                {/* {/* <button onClick = {this.onClick}>Logout</button> */}
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
// style={{"color": "white", "background":"#003DA5"}}

{/* <Navbar color="light" light color="info" expand="md"></Navbar> */}