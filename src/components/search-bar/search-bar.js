import React from "react";
import "./search-bar.css";

export const SearchBox = ({placeholder,handleChange}) => (
    <input
    className="search"
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
)