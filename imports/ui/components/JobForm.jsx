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
        select: 'Shortlist'
    }

    onChangeCompanyName = (e) => this.setState(
        { [e.target.name]: e.target.value });
    
    onChangeJobTitle = (e) => this.setState(
        { [e.target.name]: e.target.value });
    
    onChangeJobStage = (e) => this.setState(
        { [e.target.name]: e.target.value });



    onSubmit = (e) => {
        e.preventDefault();
        const job =  {
          company: this.state.name,
          title: this.state.title,
          stage: this.state.select,
          url: null,
          salary: null,
          isExpanded: false,
          dates: {
              dateAdded: new Date(),
              applicationDeadline: 'set date',
              applied: 'set date',
              phoneInterview: 'set date',
              onSiteInterview: 'set date',
              offer: 'set date',
              rejected: 'set date'
          }
      }
        // console.log(this.state.select);
        // console.log(this.props.jobs);
        // Jobs.insert(job);
        this.props.addJob(job);
        // this.props.toggle();
        
    }
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="companyName">Company Name</Label>
          <Input type="text" name="name" id="companyName" placeholder="Company name ..." value = {this.state.name} onChange = {this.onChangeCompanyName}/>
        </FormGroup>
        <FormGroup>
          <Label for="jobTitle">Job Title</Label>
          <Input type="text" name="title" id="jobTitle" placeholder="Job title ..." value = {this.state.title} onChange = {this.onChangeJobTitle} />
        </FormGroup>
        <FormGroup>
          <Label for="jobStageSelect">Select</Label>
          <Input type="select" name="select" id="jobStageSelect" value={this.state.select} onChange = {this.onChangeJobStage} >
            <option>Shortlist</option>
            <option>Applied</option>
            <option>Phone Interview</option>
            <option>On Site Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs.jobs }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({addJob : addJob}, dispatch)
// }


export default connect(mapStateToProps, {addJob})(JobForm);