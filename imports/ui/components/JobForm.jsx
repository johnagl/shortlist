import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import uuid from 'uuid';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addJob } from '../actions/index';
import Jobs from '../../api/jobs.js';
import { domainToASCII } from 'url';
import CompanySuggestion from './CompanySuggestion';

class JobForm extends React.Component {
  state = {
      name: '',
      title: '',
      select: this.props.stages.allIds[0],
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
        console.log(e);
    }
  }
  
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
    //   this.props.addJob(job, this.state.select, this.props.stages.byId[this.state.select].stageId);
      // this.props.toggle();
  }

  renderSuggestions() {
    let suggestions = this.state.suggestions.map(suggestion => {
      return(
        <div key={suggestion.domain} onMouseDown={ () => {this.selectSuggestion(suggestion)} } >
          <CompanySuggestion key={suggestion.domain} name={suggestion.name} logo={suggestion.logo} />
        </div>
      );
    })

    if(this.state.companyFocused) {
      return (
        <div className="suggestions">
          { suggestions }
        </div>
      );
    }
    return (
      <div className="suggestions hide">
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
    await this.setState({selectedSuggestion: suggestion, name: suggestion.name });
    console.log("SELECTED: " + JSON.stringify(suggestion));
    console.log("NAME: " + suggestion.name);
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
          <Label for="jobStageSelect">Select</Label>
          <Input required type="select" name="select" id="jobStageSelect" value={this.state.select} onChange={this.onChangeJobStage} >
            { this.renderOptions() }
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