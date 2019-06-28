import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardBody, CardTitle, CardText } from 'reactstrap';
import DeleteButton from './DeleteButton';
// import '../../../client/main.css';

class JobCard extends Component {

  render() {
    // console.log(JSON.stringify(this.props));
    const {id, title, company, statusID} = this.props;
    return (
      <Card className="job-card">
        <CardBody>
          <DeleteButton jobID={ id }/>
          <CardTitle className="title">{ company }</CardTitle>
          <CardText>{ title }</CardText>
        </CardBody>
      </Card>
    );
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
}

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

export default connect()(JobCard);