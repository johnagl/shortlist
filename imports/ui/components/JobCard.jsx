import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
// import '../../../client/main.css';

class JobCard extends Component {
  render() {
    const {id, title, company, statusID} = this.props
    return (
      <div className="posting">
        <div>{ title }</div>
        <div>{ company }</div>
        <div>Status: { this.getStatus(statusID).description }</div>
      </div>
    );
  }

  getStatus(statusID) {
    let result =  this.props.status.filter(status => {
        return statusID == status.id
    });
    return result[0];
  }
}

const mapStateToProps = (state) => {
  return { 
      status: state.status
  };
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({addTodo: addTodo, updateDraft: updateDraft}, dispatch);
// }

export default connect(mapStateToProps)(JobCard);