import React from 'react';

class CompanySuggestion extends React.Component {

    
  render() {
    const { name, logo } = this.props;

    return (
        <div className="suggestion">
            <img src={logo} />
            <p>{ name }</p>
        </div>
    )
  }

}

export default CompanySuggestion;