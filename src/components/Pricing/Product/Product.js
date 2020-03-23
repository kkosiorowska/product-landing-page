import React from 'react';

import './Product.css';

const product = props => {
  return (
    <div className="product" id="tenor">
        <div className={"img-container " + props.category}></div>
        <div className="level">{props.name}</div>
        <h2>${props.price}</h2>
        <p>{props.description}</p>
        <button className="btn">Select</button>
    </div>
  );
}

export default product;