import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addJob, editJob } from '../actions/index';
import CompanySuggestion from './CompanySuggestion';
import DateTimePicker from 'react-datetime-picker';

import FileUploadJobForm from './files/FileUploadJobForm.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import InputWithLogo from './InputWithLogo.jsx';
import SearchAutocomplete from './SearchAutocomplete.jsx';

class AddJobForm extends React.Component {

  state = {
      company: '',
      title: '',
      select: (this.props.stage ? this.props.stage._id : this.props.stages.allIds[0]),
      phoneInterview: null,
      onSiteInterview: null,
      suggestions: [],
      selectedSuggestion: null,
  }

  onChangeText = async (e) => {
      await this.setState({ [e.target.name]: e.target.value });
  }

  onChangePhoneInterview = (phoneInterview) => this.setState({ phoneInterview });
  onChangeOnSiteInterview = (onSiteInterview) => this.setState({ onSiteInterview });

  onChangeCompanyName = async (e) => {
    try {
        await this.onChangeText(e);

      let response = await fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=:${this.state.company}`, {
          method: "GET"
      });
      let suggestions = await response.json();
      await this.setState({ suggestions, selectedSuggestion: null });

    } catch(e) {
        console.log(e);
    }
  }


  // Adds a job if one did not exist, otherwise edits existing job
  onSubmit = (e) => {
    e.preventDefault();
    let job;

    if(this.props.job) {
      job = this.props.job;
      this.updateJob(job);
    } else {
      job = this.createNewJob();
      this.props.addJob(job, this.state.select, this.props.stages.byId[this.state.select].stageId);
    }

    this.props.toggle();
  }

  createNewJob = () => {
    let id = uuid();
    let job =  {
      _id: id,
      company: this.state.company,
      title: this.state.title,
      dates: {
          createdAt: new Date(),
      },
      events: {
        phoneInterview: this.state.phoneInterview,
      },
      phoneInterview: {
        id: id,
        start: this.state.phoneInterview,
        end: this.state.phoneInterview,
        title: 'Phone Interview w/ ' + this.state.company,
        type: 'phone interview',
        company: this.state.company,
      },
      onSiteInterview: {
        id: id,
        start: this.state.onSiteInterview,
        end: this.state.onSiteInterview,
        title: 'On Site Interview @ ' + this.state.company,
        type: 'on site interview',
        company: this.state.company,
      },
      owner: Meteor.userId(),
      username: Meteor.user()
    }

    if(this.state.selectedSuggestion) {
      job["domain"] = this.state.selectedSuggestion.domain;
      job["logo"] = this.state.selectedSuggestion.logo;
    }

    return job;
  }

  async selectSuggestion(suggestion) {
    console.log("In correct suggestion block: " + JSON.stringify(suggestion));
    await this.setState({selectedSuggestion: suggestion, company: suggestion.name});
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
        <Form  onSubmit={this.onSubmit}>
            <FormGroup className="suggestions-container">
                <Label for="companyName">Company Name</Label>
                    <SearchAutocomplete
                        name="company"
                        id="companyName" 
                        placeholder="Company Name" 
                        icon={ faSearch }
                        value={ this.state.company }
                        onChange={ (e) => this.onChangeCompanyName(e) }
                        suggestions = { this.state.suggestions }
                        selection={ this.state.selectedSuggestion } 
                        selectSuggestion = { (suggestion) => this.selectSuggestion(suggestion) }
                    />
            </FormGroup>

            <FormGroup>
                <Label for="jobTitle">Job Title</Label>
                <InputWithLogo 
                    name="title" 
                    id="jobTitle" 
                    placeholder="Job Title" 
                    icon={ faBriefcase } 
                    selection={ this.state.selectSuggestion }
                    value={ this.state.title }
                    onChange={ (e) => this.onChangeText(e)} />
            </FormGroup>

            <FormGroup>
            <Label for="jobStageSelect">Stage</Label>
            <Input required type="select" name="select" id="jobStageSelect" value={this.state.select} onChange={this.onChangeText} >
                { this.renderOptions() }
            </Input>
            </FormGroup>
      
            <Row>
            <Col xs="4" sm="4">Phone Interview: </Col>
            <Col xs="4" sm="4">
                <DateTimePicker name="phoneInterview" onChange={this.onChangePhoneInterview} value={this.state.phoneInterview}/>
            </Col>
            
            </Row>
            
            <br></br>
            
            <Row>
            <Col xs="4" sm="4">On Site Interview: </Col>
            <Col xs="4" sm="4">
                <DateTimePicker name="onSiteInterview" onChange={this.onChangeOnSiteInterview} value={this.state.onSiteInterview} /></Col>
            </Row>

            <div className="button">
                <Button>Submit</Button>
            </div>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs.jobs, stages: state.jobs.stages }
}

export default connect(mapStateToProps, {addJob})(AddJobForm);

                        {/* suggestions = { this.state.suggestions }
                        selectedSuggestion = { this.state.selectedSuggestion }
                        companyFocused = { this.state.companyFocused } */}
                    {/* <Input type="text hidden" name="company" autoComplete="off" id="companyName" placeholder="Company Name" value={this.state.company} onChange={this.onChangeCompanyName} onFocus={this.handleFocus} onBlur={this.handleBlur} /> */}

                                        {/* <InputWithLogo 
                        name="company" 
                        id="companyName" 
                        placeholder="Company Name" 
                        icon={ faSearch }
                        selection={ this.state.selectSuggestion } 
                        value={ this.state.company }
                        onChange={ (e) => this.onChangeCompanyName(e) }
                        {/* onFocus={ this.handleFocus } 
                        onBlur={ this.handleBlur } */}