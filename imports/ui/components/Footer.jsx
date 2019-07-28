import React from 'react';

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
      <div className="footer">
        <a href="/">contact us</a>
        {/* <Navbar class = "change" dark expand="md">
            <Nav className="ml-left" navbar>
              <NavItem>
                <NavLink href="/">contact us</NavLink>
              </NavItem>
            </Nav>
        </Navbar> */}
      </div>
    );
  }
}