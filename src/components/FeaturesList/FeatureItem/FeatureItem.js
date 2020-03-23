import React from 'react';

import './FeatureItem.css';

const featureItem = props => {
  return (
    <div className="grid">
        <div className="icon"><i className={props.icon}></i></div>
        <div className="desc">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  );
}

export default featureItem;
