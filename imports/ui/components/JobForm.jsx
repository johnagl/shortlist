import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import uuid from 'uuid';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addJob } from '../actions/index';

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
        const job = {
            id: uuid.v4(),
            company: this.state.name,
            title: this.state.title,
            stageID: 1,
            url: null,
            salary: null,
            dateAdded: new Date(),
            isExpanded: false,
            statusID: 1
        }
        this.props.addJob(job);
        this.props.toggle();
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addJob : addJob}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(JobForm);