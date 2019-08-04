import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { addJob, editJob } from '../actions/index';
import CompanySuggestion from './CompanySuggestion';
import DateTimePicker from 'react-datetime-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import FileUploadJobForm from './files/FileUploadJobForm.jsx';


class InputWithLogo extends React.Component {

  state = {
      content: this.props.content,
  }

  onChangeText = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, placeholder, content, icon, logo } = this.props;
    library.add(icon);

    return (
        <div className="input-group input-group-unstyled">
            <input type="text" className="form-control" />
            <span className="input-group-addon">
                <i className="fa fa-search"></i>
            </span>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs.jobs, stages: state.jobs.stages }
}

export default connect(mapStateToProps, )(InputWithLogo);

        {/* <InputGroup>
            <Input 
                type="text hidden" 
                placeholder={ placeholder } 
                value = { this.state.content }
                onChange={ this.onChangeText }
            />

            <InputGroupAddon addonType="append">
                { logo ? 
                    <div className="input-logo">
                        <img src={ logo }/>
                    </div> :
                    <FontAwesomeIcon icon={icon}/> 
                }
            </InputGroupAddon>
        </InputGroup> */}