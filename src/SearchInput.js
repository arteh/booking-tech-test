import React, { Component } from "react";
import { AutocompleteOptions } from "./AutocompleteOptions.js";
export class SearchInput extends Component {
  state = {
      showOptions: false,
      matchedOptions: [],
    value: ""
  };

  static defaultProps = {
    options: []
  };

  onChange = (e) => {
      console.log("changeee", e.target.value);
      const { options } = this.props;

      const matchedOptions = options.filter((option) =>
          option.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      );

      this.setState({
          showOptions: true,
          matchedOptions,
          value: e.currentTarget.value,
      })
  };

  render() {
    console.log("props", this.props);
      const { showOptions,
          matchedOptions,
          value,
      } = this.state;

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
            value={value}
          ></input>
            <AutocompleteOptions {...this.state} />
        </form>
      </div>
    );
  }
}
