import React from 'react';

export const AutocompleteOptions = (props) => {

    const { matchedOptions, value, showOptions } = props;
    console.log('autocomplete props', props)

    if (showOptions && matchedOptions.length > 0 && value.length > 1) {
        console.log('ifff')
        return (
            <ul className="options">
                {matchedOptions.map((option, i) => {
                    return <li key={i}>{option}</li>
                })}
            </ul>)
    } else return null;
}

