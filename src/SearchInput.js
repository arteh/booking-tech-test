import React, { Component } from "react";
import { AutocompleteOptions } from "./AutocompleteOptions.js";
import { getLocations } from "./helpers";
export class SearchInput extends Component {
  state = {
    isFetching: false,
    showOptions: false,
    matchedOptions: [],
    value: ""
  };

  static defaultProps = {
    options: []
  };

  onKeyUp = () => {
    const { value } = this.state;
    console.log("on key uppp value", value);
    if (value.length > 1) {
      this.setState({isFetching: true})
      getLocations(value).then(response =>
        this.setState({ matchedOptions: response, isFetching: false })
      );
    }
  };

  onChange = e => {
    console.log("change", e.target.value);

    this.setState({
      showOptions: true,
      value: e.currentTarget.value
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
            value={value}
          ></input>
          <AutocompleteOptions {...this.state} />
        </form>
      </div>
    );
  }
}
