import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import DeleteButton from './DeleteButton';
import JobForm from './JobForm';
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
    // return(<Avatar src={logoURL} className="logo" children={name} />);
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

  lightenDarkenColor = (col, amt) => {
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

  render() {
    const { job, index, color, stage } = this.props;
    const logo = this.renderLogo(job.logo, job.company);
    const dateCreated = moment(job.dates.createdAt).format("MMM D, YYYY");

    const footerStyle = {
      "background": this.lightenDarkenColor(color, 60),
    }

    return (
      <div>
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
                  </div>
                  <div style={footerStyle} className="card-text card-footer">Created { dateCreated }</div>
                </div>
              </div>
            )}
          </Draggable>
          
          <React.Fragment>
            <div className = "add-button-container">
              {/* <Button className="addButton" onClick={this.toggle}>Add Job</Button> */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                  <ModalHeader toggle={this.toggle}>Edit a Job</ModalHeader>
                  <ModalBody>
                    <JobForm job={job} jobIndex={index} stage={this.props.stage} toggle={this.toggle}/>
                  </ModalBody>
              </Modal>
            </div>
          </React.Fragment>
      </div>
    );
  }
}

{/* <React.Fragment>
            <div className = "add-button-container">

              {/* <Button className="addButton" onClick={this.toggle}>Add Job</Button> */}
                {/* <Modal isOpen={this.state.modal} toggle={this.toggle} >
                  <ModalHeader toggle={this.toggle}>Edit a Job</ModalHeader>
                  <ModalBody>
                    <JobForm job={job} stage={this.props.stage} toggle={this.toggle}/>
                  </ModalBody>
              </Modal>
            </div>
          </React.Fragment> */}

export default JobCard;