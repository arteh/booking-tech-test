import React, {Component} from "react";

export class SearchInput extends Component {



 
        state = {
            //rename these
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: ''
        }

    static defaultProperty = {
        suggestions: []
    }
    
    onChange = (e) => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;
    
        const filteredSuggestions = suggestions.filter(
          (suggestion) =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
          userInput: e.currentTarget.value
        });
    };

    onClick = (e) => {
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText
        });
    };
    
    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
    
        if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        }
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
      };

    render() {


        
        // const { suggestions } = this.props;
        // rework n rename below
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
            activeSuggestion,
            filteredSuggestions,
            showSuggestions,
            userInput
            }
        } = this;

        


let suggestionsListComponent;

if (showSuggestions && userInput) {
  if (filteredSuggestions.length) {
    suggestionsListComponent = (
      <ul class="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          
          return (
            <li  key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    );
  } else {
    suggestionsListComponent = (
      <div class="no-suggestions">
        <em>No suggestions!</em>
      </div>
    );
  }
}

        return (
            <div>
                <form autoComplete="off" className="search-form">
                <label htmlFor="Pick-up Location">Pick-up Location</label><br />
                     
                      <input
                      name="search-input"
                      id="search-input"
                      aria-label="Pick-up Location"
                      type="text"
                        placeholder="city, airport, station, region, district..."
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        >
                          </input>
                {suggestionsListComponent}
            
              </form>
            </div>
          );


    }
};



