import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardBody, CardTitle, CardText } from 'reactstrap';
import DeleteButton from './DeleteButton';
import { Draggable } from 'react-beautiful-dnd';
import '../../../client/main.css';

const JobCard = ({ id, title, company, index, color, stage, stageId }) => {
    console.log('STAGE IN JOBCARD :' + JSON.stringify(stage));
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <div 
            {...provided.draggableProps} 
            {...provided.dragHandleProps} 
            ref={provided.innerRef}
          >
            <div className="job-card" style={{"borderColor": color}} onClick={handleEdit}>
              <div className="card-body" >
                <DeleteButton stage = {stage} jobID={ id } color={ color }/>
                <div className="card-text card-title">{ company }</div>
                <p className="card-text">{ title }</p>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }

  handleEdit = () => {
    console.log("YOOOOOO");
  }

//   <div className="posting">
//   <DeleteButton className="delete-button" jobID={id} />
//   <div>{ title }</div>
//   <div>{ company }</div>
// </div>

  // getStatus(statusID) {
  //   let result =  this.props.status.filter(status => {
  //       return statusID == status.id
  //   });
  //   return result[0];
  // }
// }

// const mapStateToProps = (state) => {
//   return { 
//       status: state.status.status
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({addTodo: addTodo, updateDraft: updateDraft}, dispatch);
// }

// const {id, title, company, statusID} = this.props;
// return (
//   <div className="posting">
//     <div>{ title }</div>
//     <div>{ company }</div>
//     <div>Status: { this.getStatus(statusID).description }</div>
//     <DeleteButton jobID={id} />
//   </div>
// );

export default JobCard;