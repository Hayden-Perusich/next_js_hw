import React from "react";
import "./SearchBar.css";

// Controlled SearchBar component
// Props:
// - value: string (current input value)
// - onChange: function(newValue) called on input change
// - placeholder: optional placeholder text
const SearchBar = ({ value, onChange, placeholder = 'Search products...' }) => {
    const handleInputChange = (event) => {
        if (onChange) onChange(event.target.value);
    };

    return (
        <div className="searchbar-wrapper">
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                className="search-input"
                placeholder={placeholder}
                aria-label="Search products"
            />
        </div>
    );
};

export default SearchBar;