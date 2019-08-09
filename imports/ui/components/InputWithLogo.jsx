import React from 'react';
import { connect } from 'react-redux';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';



class InputWithLogo extends React.Component {
  render() {
    const { id, name, placeholder, value, icon, selection, onChange } = this.props;
    library.add(icon);

    return (
        <InputGroup>
            <Input className="py-2 border-right-0"
                type="text hidden"
                autoComplete="off"
                name= { name }
                id = { id }
                placeholder={ placeholder } 
                value = { this.props.value }
                onChange = { onChange }
            />

            <InputGroupAddon addonType="append">
                { (selection && selection.logo) ? 
                    <div className="input-logo bg-transparent input-group-text border-left-0">
                        <img src={ selection.logo }/>
                    </div> :
                    <div className="bg-transparent input-group-text border-left-0">
                        <FontAwesomeIcon icon={icon}/> 
                    </div>
                }
            </InputGroupAddon>

        </InputGroup>
    );
  }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs.jobs, stages: state.jobs.stages }
}

export default connect(mapStateToProps, )(InputWithLogo);