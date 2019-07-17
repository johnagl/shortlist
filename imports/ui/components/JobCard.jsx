import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardBody, CardTitle, CardText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import DeleteButton from './DeleteButton';
import EditJobForm from './EditJobForm';
import { Draggable } from 'react-beautiful-dnd';
import Avatar from '@material-ui/core/Avatar';
import '../../../client/main.css';

class JobCard extends React.Component {
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

  handleEdit = () => {
    console.log("YOOOOOO");
  }

  renderLogo = (logoURL, name) => {
    // return(<Avatar src={logoURL} className="logo" children={name} />);
    if(logoURL) {
      return(<img  className="logo" src={logoURL} onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png"}}/>);
    }
    return this.addDefaultSrc(name);
  }

  addDefaultSrc = (name) => {
    console.log("NAME!!! " + name);
    return(
      <div className="default-logo">
        {name.charAt(0).toUpperCase()}
      </div>
    )
  }

  render() {
    const { job, index, color, stage } = this.props;
    const logo = this.renderLogo(job.logo, job.company);

    return (
      
      <React.Fragment >
        <Draggable draggableId={String(job._id)} index={index}>
          {provided => (
            <div 
              {...provided.draggableProps} 
              {...provided.dragHandleProps} 
              ref={provided.innerRef}
            >
              <div className="job-card" style={{"borderColor": color}} onClick={this.toggle}>
                <div className="card-body" >
                  <DeleteButton stage={ stage } jobID={ job._id } color={ color }/>
                  <div className="card-text card-title">
                    { logo }
                    { job.company }
                  </div>
                  <p className="card-text">{ job.title }</p>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Edit Job</ModalHeader>
                        <ModalBody>
                          <EditJobForm job={ job } stage={stage} />
                        </ModalBody>
                    </Modal>
                </div>
              </div>
            </div>
          )}
        </Draggable>
      </React.Fragment>
    );
  }
}

export default JobCard;