import React from 'react';
import { connect } from 'react-redux';
import { removeJob } from '../actions';

class DeleteButton extends React.Component {

    handleRemove() {
        this.props.removeJob(this.props.jobID);
    }

    render() {
        return (
            <button onClick={this.handleRemove}>&#215;</button>
        );
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs };
}

export default connect(mapStateToProps, { removeJob })(DeleteButton);