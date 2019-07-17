import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

class CompanySuggestion extends React.Component {

    
  render() {
    const { name, logo } = this.props;

    return (
        <div className="suggestion">
            <img src={logo} />
            <span className="truncate">{ name }</span>
        </div>
    )
  }

}

export default CompanySuggestion;