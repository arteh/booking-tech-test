import React from 'react';

export const SearchInput = () => {
    return (
        <div>
            <form className="search-form">
                <label>Pick-up Location</label><br/>
                
                <input
                placeholder="city, airport, station, region, district..."
                >
                </input>

            </form>
        </div>
    )
}