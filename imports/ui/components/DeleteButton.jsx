import React from 'react';
import { connect } from 'react-redux';
import { removeJob } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class DeleteButton extends React.Component {

    handleRemove = () => {
        this.props.removeJob(this.props.jobID, this.props.stage.stageId, this.props.stage._id);
    }

    render() {
        return (
            <button className="delete-button" onClick={this.handleRemove} 
                style={{"color": "#FFFFFF",
                        "background": this.props.color}}
                >
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs.jobs };
}


export default connect(mapStateToProps, {removeJob})(DeleteButton);