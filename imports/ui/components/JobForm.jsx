import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import uuid from 'uuid';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addJob } from '../actions/index';
import Jobs from '../../api/jobs.js';

class JobForm extends React.Component {
  state = {
      name: '',
      title: '',
      select: this.props.stages.allIds[0],
  }

  onChangeCompanyName = (e) => this.setState(
    { [e.target.name]: e.target.value }
  );
  
  onChangeJobTitle = (e) => this.setState(
    { [e.target.name]: e.target.value }
  );
  
  onChangeJobStage = (e) => this.setState(
    { [e.target.name]: e.target.value }
  );



  onSubmit = (e) => {
      e.preventDefault();
      const job =  {
        _id: uuid(),
        company: this.state.name,
        title: this.state.title,
        dates: {
            createdAt: new Date(),
        },
        owner: Meteor.userId(),
        userEmail: Meteor.user().emails[0].address
    }
      this.props.addJob(job, this.state.select, this.props.stages.byId[this.state.select].stageId);
      // this.props.toggle();
  }

  renderOptions() {
    let stagesIds = this.props.stages.allIds;
    let stages = [];
    for(let id of stagesIds) {
      stages.push(
        {
          _id: id,
          title: this.props.stages.byId[id].title,
        });
    }

    let options = stages.map(stage => {
      return(<option key={stage._id} value={stage._id}>{stage.title}</option>)              
    });

    return options;
  }


  render() {

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="companyName">Company Name</Label>
          <Input type="text hidden" name="name" autoComplete="off" id="companyName" placeholder="Company Name" value = {this.state.name} onChange = {this.onChangeCompanyName}/>
        </FormGroup>
        <FormGroup>
          <Label for="jobTitle">Job Title</Label>
          <Input type="text hidden" name="title" autoComplete="off" id="jobTitle" placeholder="Job Title" value = {this.state.title} onChange = {this.onChangeJobTitle} />
        </FormGroup>
        <FormGroup>
          <Label for="jobStageSelect">Select</Label>
          <Input required type="select" name="select" id="jobStageSelect" value={this.state.select} onChange={this.onChangeJobStage} >
            {this.renderOptions()}
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs.jobs, stages: state.jobs.stages }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({addJob : addJob}, dispatch)
// }


export default connect(mapStateToProps, {addJob})(JobForm);