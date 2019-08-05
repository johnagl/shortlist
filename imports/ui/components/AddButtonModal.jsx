/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddJobForm from './AddJobForm.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
        <div className ="add-button-container">
          { this.props.job ? null : 
            <Button className="addButton" onClick={this.toggle}>
              {this.props.floating ? "Add Job" : <FontAwesomeIcon icon={faPlus}/> }
            </Button> 
          }
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Add a Job</ModalHeader>
              <ModalBody >
                <AddJobForm stage={this.props.stage} toggle={this.toggle}/>
              </ModalBody>
              <ModalFooter toggle={this.toggle}>
                <div className="clearbit">
                  Company suggestions courtesy of <a href="https://clearbit.com/" target="_blank">Clearbit Autocomplete API</a>
                </div>
              </ModalFooter>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}


export default AddButtonModal;