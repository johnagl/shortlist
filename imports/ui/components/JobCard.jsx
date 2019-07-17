import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardBody, CardTitle, CardText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import DeleteButton from './DeleteButton';
import EditJobForm from './EditJobForm';
import { Draggable } from 'react-beautiful-dnd';
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

  render() {
    const { id, title, company, index, color, stage, stageId } = this.props;

    return (
      <React.Fragment >
        <Draggable draggableId={String(id)} index={index}>
          {provided => (
            <div 
              {...provided.draggableProps} 
              {...provided.dragHandleProps} 
              ref={provided.innerRef}
            >
              <div className="job-card" style={{"borderColor": color}} onClick={this.toggle}>
                <div className="card-body" >
                  <DeleteButton stage={ stage } jobID={ id } color={ color }/>
                  <div className="card-text card-title">{ company }</div>
                  <p className="card-text">{ title }</p>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Edit Job</ModalHeader>
                        <ModalBody>
                          <EditJobForm job={ {id, company, title} } />
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

// const JobCard = ({ id, title, company, index, color, stage, stageId }) => {
//     console.log('STAGE IN JOBCARD :' + JSON.stringify(stage));
//     return (
//       <Draggable draggableId={String(id)} index={index}>
//         {provided => (
//           <div 
//             {...provided.draggableProps} 
//             {...provided.dragHandleProps} 
//             ref={provided.innerRef}
//           >
//             <div className="job-card" style={{"borderColor": color}} onClick={handleEdit}>
//               <div className="card-body" >
//                 <DeleteButton stage = {stage} jobID={ id } color={ color }/>
//                 <div className="card-text card-title">{ company }</div>
//                 <p className="card-text">{ title }</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </Draggable>
//     );
//   }

//   handleEdit = () => {
//     console.log("YOOOOOO");
//   }

// export default JobCard;