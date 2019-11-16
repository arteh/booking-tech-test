import React from "react";
import { SearchInput } from './SearchInput.js';

export const SearchBox = () => {
  return (
    <div className="search-box">
      <h1>Where are you going?</h1>
      <SearchInput
        options={['Manchester', 'Birmingham', 'Sheffield', 'Liverpool', 'Leicester', 'Glasgow', 'Macclesfield', 'Mansfield', 'Massachusetts', 'Manhattan', 'Ma', 'Marhhh' ]}
      />
    </div>
  );
};


