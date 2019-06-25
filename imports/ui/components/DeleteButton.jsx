import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { removeJob } from '../actions/index';

class DeleteButton extends React.Component {

    handleRemove = () => {
        console.log(this.props.jobID);
        this.props.removeJob(this.props.jobID);
    }

    render() {
        return (
            <button onClick={this.handleRemove}>&#215;</button>
        );
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs.jobs };
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({removeJob : removeJob}, dispatch)
// }

export default connect(mapStateToProps, {removeJob})(DeleteButton);