import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addJob, editJob } from '../actions/index';
import CompanySuggestion from './CompanySuggestion';
import DateTimePicker from 'react-datetime-picker';

import FileUploadJobForm from './files/FileUploadJobForm.jsx';

class JobForm extends React.Component {

  state = {
      _id: (this.props.job ? this.props.job._id : ''),
      name: (this.props.job ? this.props.job.company : ''),
      title: (this.props.job ? this.props.job.title : ''),
      select: (this.props.stage ? this.props.stage._id : this.props.stages.allIds[0]),
      phoneInterview: (this.props.job ? this.props.job.phoneInterview.start : null),
      onSiteInterview: (this.props.job ? this.props.job.onSiteInterview.start : null),
      suggestions: [],
      selectedSuggestion: null,
      companyFocused: false,
  }

  onChangeCompanyName = async (e) => {
    await this.setState({ [e.target.name]: e.target.value });

    try {
      let response = await fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=:${this.state.name}`, {
          method: "GET"
      });
      let suggestions = await response.json();

    await this.setState({ suggestions, selectedSuggestion: null });

    } catch(e) {
        // console.log(e);
    }
  }
  
  onChangeJobTitle = (e) => this.setState(
    { [e.target.name]: e.target.value }
  );

  // onChangePhoneInterview = (e) => this.setState(
  //   { [e.target.name]: e.target.value }
  // );

 
  
  onChangeJobStage = async (e) => {
    // console.log("OLD STAGE: " + JSON.stringify(this.props.stage));
    await this.setState({ [e.target.name]: e.target.value });
    // console.log("NEW STAGE ID: " + JSON.stringify(this.state.select))
  }

  onChangePhoneInterview = phoneInterview => this.setState({ phoneInterview });
  onChangeOnSiteInterview = onSiteInterview => this.setState({ onSiteInterview });


  // Adds a job if one did not exist, otherwise edits existing job
  onSubmit = (e) => {
    e.preventDefault();
    let job;
    // this.addEvent();

    // TODO: add guards here if mandatory fields have not been completed
    if(this.props.job) {
      job = this.props.job;
      job["company"] = this.state.name;
      job["title"] = this.state.title;
      job["phoneInterview"]["start"] = this.state.phoneInterview;
      job["phoneInterview"]["end"] = this.state.phoneInterview;
      job["onSiteInterview"]["start"] = this.state.onSiteInterview;
      job["onSiteInterview"]["end"] = this.state.onSiteInterview;
      // job["onSiteInterview"] = this.state.onSiteInterview;

      if(this.state.selectedSuggestion) {
        job["domain"] = this.state.selectedSuggestion.domain;
        job["logo"] = this.state.selectedSuggestion.logo;
      }

      this.props.editJob(job, this.props.stage._id, this.state.select, this.props.jobIndex);

    } else {
      let id = uuid();
      job =  {
        _id: id,
        company: this.state.name,
        title: this.state.title,
        dates: {
            createdAt: new Date(),
        },
        events: {
          phoneInterview:  this.state.phoneInterview,
        },
        // phoneInterview: this.state.phoneInterview,
        phoneInterview: {
          id: id,
          start: this.state.phoneInterview,
          end: this.state.phoneInterview,
          title: 'Phone Interview  ' + this.state.name,
          type: 'phone interview',
          company: this.state.name,

        },
        // onSiteInterview: this.state.onSiteInterview,
        onSiteInterview: {
          id, id,
          start: this.state.onSiteInterview,
          end: this.state.onSiteInterview,
          title: 'On Site Interview  ' + this.state.name,
          type: 'on site interview',
          company: this.state.name,
        },
        owner: Meteor.userId(),
        username: Meteor.user()
    }

    if(this.state.selectedSuggestion) {
      job["domain"] = this.state.selectedSuggestion.domain;
      job["logo"] = this.state.selectedSuggestion.logo;
    }
      this.props.addJob(job, this.state.select, this.props.stages.byId[this.state.select].stageId);
    }
      this.props.toggle();
  }

  renderSuggestions() {
    let suggestions = this.state.suggestions.map(suggestion => {
      return(
        <div key={suggestion.domain} onMouseDown={ () => {this.selectSuggestion(suggestion)} } >
          <CompanySuggestion key={suggestion.domain} name={suggestion.name} logo={suggestion.logo} />
        </div>
      );
    })

    let className;
    this.state.companyFocused? className="suggestions" : className="suggestions hide"

      return (
        <div className={className}>
          { suggestions }
        </div>
      );
  }

  handleFocus = () => {
    this.setState({companyFocused: true});
  }

  handleBlur = () => {
    this.setState({companyFocused: false});
  }

  async selectSuggestion(suggestion) {
    await this.setState({selectedSuggestion: suggestion, name: suggestion.name});
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
        
          <Input type="text hidden" name="name" autoComplete="off" id="companyName" placeholder="Company Name" value={this.state.name} onChange={this.onChangeCompanyName} onFocus={this.handleFocus} onBlur={this.handleBlur} />
          { this.renderSuggestions() }
         

        </FormGroup>
        <FormGroup>
          <Label for="jobTitle">Job Title</Label>
          <Input type="text hidden" name="title" autoComplete="off" id="jobTitle" placeholder="Job Title" value = {this.state.title} onChange = {this.onChangeJobTitle} />
        </FormGroup>
        <FormGroup>
          <Label for="jobStageSelect">Stage</Label>
          <Input required type="select" name="select" id="jobStageSelect" value={this.state.select} onChange={this.onChangeJobStage} >
            { this.renderOptions() }
          </Input>
        </FormGroup>
      
        <Row>
          <Col xs="4" sm="4">Phone Interview: </Col>
          <Col xs="4" sm="4">
            <DateTimePicker onChange={this.onChangePhoneInterview} value={this.state.phoneInterview}/>
          </Col>
          
        </Row>
        <br></br>
        <Row>
          <Col xs="4" sm="4">On Site Interview: </Col>
          <Col xs="4" sm="4"><DateTimePicker
          onChange={this.onChangeOnSiteInterview}
          value={this.state.onSiteInterview}
        /></Col>
          
        </Row>
        {/* This component allows us to upload documents in the JobForm, jobId prop must be passed down */}
        <FileUploadJobForm jobId={this.state._id}/>
        
        
        <Button>Submit</Button>
      </Form>
    
      
    );
  }
}

position = {
  position: 'relative',
  left: '100px',
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs.jobs, stages: state.jobs.stages }
}

export default connect(mapStateToProps, {addJob, editJob})(JobForm);