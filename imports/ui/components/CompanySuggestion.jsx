import React from 'react';

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