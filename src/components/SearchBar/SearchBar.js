import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match' : 'best_match',
    'Highest Rated': 'highest_rated',
    'Most Reviewed' : 'most_reviewed'
}

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOptions => {
            let sortByOptionValue = sortByOptions[sortByOption];
            
        });



    }
}
