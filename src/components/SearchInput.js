import React, { Component } from "react";
import { AutocompleteOptions } from "./";
import { getLocations } from "../helpers.js";

export class SearchInput extends Component {
  state = {
    isFetching: false,
    showOptions: false,
    matchedOptions: [],
    value: "",
    error: false
  };

  static defaultProps = {
    options: []
  };

  onKeyUp = () => {
    const { value } = this.state;
    if (value.length > 1) {
      this.setState({ isFetching: true });

      getLocations(value).then(response => {
        if (response.error) {
          this.setState({ isFetching: false, error: true });
        } else {
          this.setState({
            isFetching: false,
            matchedOptions: response,
            error: false
          });
        }
      });
    }
  };

  onChange = e => {
    e.preventDefault();
    this.setState({
      showOptions: true,
      value: e.currentTarget.value
    });
  };

  onClick = e => {
    e.preventDefault();
    this.setState({
      matchedOptions: [],
      showOptions: false,
      value: e.currentTarget.innerText
    });
  };

  render() {
    const { value, error } = this.state;
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
            value={value}
          ></input>
          <AutocompleteOptions {...this.state} onClick={this.onClick} />
          <button type="submit">
            <span className="search">Search</span>
          </button>
          {error && (
            <p>
              <em>There has been an error. Please try again or contact us.</em>
            </p>
          )}
        </form>
      </div>
    );
  }
}
