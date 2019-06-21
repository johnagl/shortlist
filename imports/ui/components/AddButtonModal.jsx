/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import JobForm from './JobForm.jsx';

class AddButtonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <React.Fragment>
                <Button style = {style} onClick={this.toggle}>Add Job</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a Job</ModalHeader>
          <ModalBody>
            <JobForm toggle={this.toggle}/>
            
          </ModalBody>
        </Modal>
      </React.Fragment>

    );
  }
}

style = {
  backgroundColor: '#08d9d6',
  fontColor: '252a34'
}

{/* <Button color="danger" onClick={this.toggle}>Add Job</Button> */}

export default AddButtonModal;