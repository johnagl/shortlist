import React from 'react';
import InputWithLogo from './InputWithLogo.jsx';
import CompanySuggestion from './CompanySuggestion.jsx';

class SearchAutocomplete extends React.Component {

    state = {
        suggestions: [],
        selectedSuggestion: null,
        companyFocused: false,
    }

    handleFocus = () => {
        this.setState({companyFocused: true});
    }

    handleBlur = () => {
        this.setState({companyFocused: false});
    }

    // async selectSuggestion(suggestion) {
    //     await this.setState({selectedSuggestion: suggestion, company: suggestion.name});
    // }

    renderSuggestions() {
        let suggestions = this.props.suggestions.map(suggestion => {
            return(
            <div key={suggestion.domain} onMouseDown={ () => {(suggestion) => this.props.selectSuggestion(suggestion)} } >
                <CompanySuggestion key={suggestion.domain} name={suggestion.name} logo={suggestion.logo} />
            </div>
            );
        })

        let className;
        className = suggestions.length == 0 ? "hide-border" : this.state.companyFocused ? "" : "hide";

        return (
        <div className={className}>
            <div className="suggestions">
                { suggestions }
            </div>
        </div>
        );
    }

    
  render() {
    const { name, id, placeholder, icon, selection, value, onChange, suggestions, selectedSuggestion } = this.props;

    return (
        <div>
            <InputWithLogo 
                name= { name }
                id={ id }
                placeholder={ placeholder } 
                icon={ icon }
                selection={ selection} 
                value={ value }
                onChange={ (e) => this.props.onChange(e)}
                onFocus={() => this.handleFocus()}
                onBlur={() => this.handleBlur()}
            />
            { this.renderSuggestions() }
        </div>
    )
  }

}

export default SearchAutocomplete;