import React from 'react';
import SearchTabs from '../SearchTabs';
import SearchBar from '../SearchBar';
import '../../Hero/Hero.css';
import './SearchDiv.css';

const SearchDiv = props => 
    <div className="row search-div">
        <SearchTabs />
        <SearchBar {...props} />
    </div>;

export default SearchDiv;