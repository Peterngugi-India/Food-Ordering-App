import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';


// BusinessList component
class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.business.map(business => {
                    return <Business business={business} />
                })}
            </div>
        );
    }
}

export default BusinessList;


