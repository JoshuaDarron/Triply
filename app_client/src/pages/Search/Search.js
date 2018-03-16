import React, { Component } from 'react';
import './Search.css';
import SearchForm from '../../components/SearchForm';

class Search extends Component {
    render() {
        return (
            <div style={{ height: '100%' }}>
                <SearchForm />
            </div>
        );
    };
};

export default Search;