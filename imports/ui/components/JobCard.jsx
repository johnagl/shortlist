import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
// import '../../../client/main.css';

class JobCard extends Component {
  render() {
    const {id, title, company, statusID} = this.props;
    console.log("PROPS: " + JSON.stringify(this.state));

    return (
      <div>
        <div>{ title }</div>
        <div>{ company }</div>
        <div>Status: { statusID }</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(JSON.stringify(state.status));
  return { 
      status: state.status
  };
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({addTodo: addTodo, updateDraft: updateDraft}, dispatch);
// }

export default connect(mapStateToProps)(JobCard);