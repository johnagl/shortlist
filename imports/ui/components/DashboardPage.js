import React from 'react';
import { connect } from 'react-redux';
import JobStageCategory from './JobStageCategory';
import JobPostings from './JobPostings';

class DashboardPage extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <JobStageCategory/>
                <JobPostings jobs={this.props.jobs}/>
            </div>
          );
    }
  }

const mapStateToProps = (state) => {
    return { 
        jobs: state.jobs
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({addTodo: addTodo, updateDraft: updateDraft}, dispatch);
// }

export default connect(mapStateToProps)(DashboardPage);