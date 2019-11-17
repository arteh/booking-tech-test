import React from "react";

export const AutocompleteOptions = props => {
  const { matchedOptions, value, showOptions } = props;
  // console.log("autocomplete props", props);

  if (showOptions && matchedOptions.length > 0 && value.length > 1) {
    return (
      <ul className="options">
        {matchedOptions.map((option, i) => {
          return <li key={i}>{option.name}</li>;
        })}
      </ul>
    );
  } else if (value.length > 1 && matchedOptions.length < 1) {
    return <p>No results found</p>;
  } else return null;
};
