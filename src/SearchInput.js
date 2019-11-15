import React from "react";

export const SearchInput = () => {
  return (
    <div>
      <form className="search-form">
        <label htmlFor="Pick-up Location">Pick-up Location</label>
        <br />

        <input
          name="search-input"
          id="search-input"
          aria-label="Pick-up Location"
          type="text"
          placeholder="city, airport, station, region, district..."
        ></input>
      </form>
    </div>
  );
};
