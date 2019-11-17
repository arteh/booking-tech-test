import React, { Component } from "react";
import { AutocompleteOptions } from "./AutocompleteOptions.js";
import { getLocations } from "./helpers";
export class SearchInput extends Component {
  state = {
    isFetching: false,
    showOptions: false,
    matchedOptions: [],
    activeOption: 0,
    value: ""
  };

  static defaultProps = {
    options: []
  };

  onKeyUp = () => {
    const { value } = this.state;
    if (value.length > 1) {
      this.setState({ isFetching: true });
      getLocations(value).then(response =>
        this.setState({ matchedOptions: response, isFetching: false })
      );
    }
  };

  onChange = e => {
    this.setState({
      showOptions: true,
      value: e.currentTarget.value,
      activeOption: 0
    });
  };

  onClick = e => {
    this.setState({
      activeOption: 0,
      matchedOptions: [],
      showOptions: false,
      value: e.currentTarget.innerText
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <form autoComplete="off" className="search-form">
          <label htmlFor="Pick-up Location">Pick-up Location</label>
          <br />

          <input
            name="search-input"
            id="search-input"
            aria-label="Pick-up Location"
            type="text"
            placeholder="city, airport, station, region, district..."
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
            onKeyDown={this.onKeyDown}
            value={value}
          ></input>
          <AutocompleteOptions {...this.state} onClick={this.onClick} />
          <button type="submit">
            <span className="search">Search</span>
          </button>
        </form>
      </div>
    );
  }
}
