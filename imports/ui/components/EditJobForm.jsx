import React from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import AddJobForm from './AddJobForm.jsx';

import FileUploadJobForm from './files/FileUploadJobForm.jsx';

class EditJobForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      _id: this.props.job._id,
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=:${this.state.company}`, {
          method: "GET"
      });
      let suggestions = await response.json();
      await this.setState({ suggestions });
  
    } catch(e) {
        console.log(e);
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div> 
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Documents
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab} className="content">
            <TabPane tabId="1">
              <AddJobForm job={this.props.job} stage={this.props.stage}/>
            </TabPane>

            <TabPane tabId="2">
              <FileUploadJobForm jobId={this.state._id}/>
            </TabPane>

          </TabContent>
      </div>);
    } 
  }

const mapStateToProps = (state) => {
  return { jobs: state.jobs.jobs, stages: state.jobs.stages }
}

export default connect(mapStateToProps, )(EditJobForm);