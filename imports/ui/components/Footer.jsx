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
      <div style = {{"text-align":"right"}}>
        <Navbar class = "change" dark expand="md" style={{"color": "white", "background":"#fcb18d" , "text-align":"right"}}>
          <NavbarBrand style = {{"text-align": "right", "color":"grey"}} href="/">contact us</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-left" navbar>
              <NavItem>
                {/* <NavLink href="/map">map</NavLink> */}
              </NavItem>
              <NavItem>
                {/* <NavLink href="/calendar">calendar</NavLink> */}
              </NavItem>
              <NavItem>
               {/* <NavLink href="https://www.google.com/search?q=google+job+search&oq=google+job+search&aqs=&ibp=htl;jobs&sa=X&ved=2ahUKEwibzr-K_vriAhU7CTQIHTuIBS0QiYsCKAB6BAgHEAM#fpstate=tldetail&htidocid=hG5i5uLtYe8QnZ98AAAAAA%3D%3D&htivrt=jobs" target ="_blank">job search</NavLink> */}
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  logout
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    logout
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    account
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

{/* <Navbar color="light" light color="info" expand="md"></Navbar> */}