import React from "react";
import PropTypes from "prop-types";

export const AutocompleteOptions = props => {
  const { isFetching, matchedOptions, value, showOptions, onClick } = props;

  let optionsMessage = "";

  if (isFetching) optionsMessage = <p>Loading...</p>;

  if (!isFetching && showOptions && value.length > 1) {
    if (matchedOptions.length < 1) optionsMessage = <p>No results found</p>;

    if (matchedOptions.length > 0) {
      optionsMessage = (
        <ul className="options">
          {matchedOptions.map((option, i) => {
            return (
              <li key={i + option} onClick={onClick}>
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

AutocompleteOptions.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  matchedOptions: PropTypes.array.isRequired,
  showOptions: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
