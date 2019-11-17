import React from "react";

export const AutocompleteOptions = props => {
  const { isFetching, matchedOptions, value, showOptions, onClick } = props;

  let optionsMessage = "";

  if (isFetching) optionsMessage = <p>Loading...</p>;
  else if (!isFetching && showOptions && value.length > 1) {
    if (matchedOptions.length < 1) optionsMessage = <p>No results found</p>;

    if (matchedOptions.length > 0) {
      optionsMessage = (
        <ul className="options">
          {matchedOptions.map((option, i) => {
            return (
              <li key={i} onClick={onClick}>
                {option.name}
              </li>
            );
          })}
        </ul>
      );
    }
  }
  return optionsMessage;
};
