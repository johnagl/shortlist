import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown style={{margin: 'auto'}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret >
          Shortlist
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Applied</DropdownItem>
          <DropdownItem>Phone Interview</DropdownItem>
          <DropdownItem>On Site Interview</DropdownItem>
          <DropdownItem>Offer</DropdownItem>
          <DropdownItem>Rejected</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}