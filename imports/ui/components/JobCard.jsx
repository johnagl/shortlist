import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DeleteButton from './DeleteButton';
import JobForm from './JobForm';
import EditJobForm from './EditJobForm';
import { Draggable } from 'react-beautiful-dnd';
import '../../../client/main.css';
var moment = require('moment');

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
  }

  renderLogo = (logoURL, name) => {
    if(logoURL) {
      return(<img  className="logo" src={logoURL} onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png"}}/>);
    }
    return this.addDefaultSrc(name);
  }

  addDefaultSrc = (name) => {
    return(
      <div className="logo default-logo">
        {name.charAt(0).toUpperCase()}
      </div>
    )
  }

  render() {
    const { job, index, color, stage, hide } = this.props;
    const logo = this.renderLogo(job.logo, job.company);
    const dateCreated = moment(job.dates.createdAt).format("MMM D, YYYY");
    let className = "job-card" + (hide ? " partial-fade": "");
    let hideClass = (hide ? " partial-fade": "");

    return (
      <div>
        <Draggable draggableId={String(job._id)} index={index} className={hideClass}>
            {provided => (
              <div 
                {...provided.draggableProps} 
                {...provided.dragHandleProps} 
                ref={provided.innerRef}
              >
              { hide ? 
                <div className="card-placeholder">
                </div> :
                <div className={className} style={{"borderColor": color}} onClick={this.toggle}>
                  <div className="card-body" >
                    <DeleteButton stage={ stage } jobID={ job._id } color={ color }/>
                    <div className="card-text card-title">
                      { logo }
                      { job.company }
                    </div>
                    <p className="card-text">{ job.title }</p>
                  </div>
                  <div className="card-text card-footer">Created { dateCreated }</div>
                </div>
              }
              </div>
            )}
          </Draggable>
          
          <React.Fragment>
            <div className = "add-button-container">
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                  <ModalHeader toggle={this.toggle}>Edit a Job</ModalHeader>
                  <ModalBody>
                    <EditJobForm job={job} jobIndex={index} stage={this.props.stage} toggle={this.toggle}/>
                  </ModalBody>
                  <ModalFooter>
                    <div className="clearbit">
                      Company autcompletion courtesy of <br/>
                      <a href="https://clearbit.com/" target="_blank">Clearbit Autocomplete API</a>
                    </div>
                  </ModalFooter>
              </Modal>
            </div>
          </React.Fragment>
      </div>
    );
  }
}

export default JobCard;