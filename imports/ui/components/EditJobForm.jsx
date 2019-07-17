import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import uuid from 'uuid';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addJob } from '../actions/index';

class EditJobForm extends React.Component {
  state = {
      company: this.props.job.company,
      title: this.props.job.title,
      select: this.props.stage._id,
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
    //   e.preventDefault();
    //   const job =  {
    //     _id: uuid(),
    //     company: this.state.name,
    //     title: this.state.title,
    //     dates: {
    //         createdAt: new Date(),
    //     },
    //     owner: Meteor.userId(),
    //     userEmail: Meteor.user().emails[0].address
    // }
    // TODO: add this.props.editJob(job);
    //   this.props.addJob(job, this.state.select, this.props.stages.byId[this.state.select].stageId);
    //   this.props.editJob(job);
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
          <Label for="companyName">Company</Label>
          <Input type="text hidden" name="company" autoComplete="off" id="companyName" placeholder="Company" value = {this.state.company} onChange = {this.onChangeCompanyName}/>
        </FormGroup>
        <FormGroup>
          <Label for="jobTitle">Job Title</Label>
          <Input type="text hidden" name="title" autoComplete="off" id="jobTitle" placeholder="Job Title" value = {this.state.title} onChange = {this.onChangeJobTitle} />
        </FormGroup>
        <FormGroup>
          <Label for="jobStageSelect">Move Job</Label>
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

export default connect(mapStateToProps, {addJob})(EditJobForm);