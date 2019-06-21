import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
  render() {
    return (
      <div>
        <Navbar color="light" light color="info" expand="md">
          <NavbarBrand href="/">Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Map</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Calendar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.google.com/search?q=google+job+search&oq=google+job+search&aqs=&ibp=htl;jobs&sa=X&ved=2ahUKEwibzr-K_vriAhU7CTQIHTuIBS0QiYsCKAB6BAgHEAM#fpstate=tldetail&htidocid=hG5i5uLtYe8QnZ98AAAAAA%3D%3D&htivrt=jobs" target ="_blank">Search For Jobs</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Login
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Login
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Sign Up
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}