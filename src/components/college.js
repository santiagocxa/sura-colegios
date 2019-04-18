import React from 'react';
import './college.css';

function College({ item }) {
  return (
    <div className="College">
      <div>
        <img className="College-image" src={item.image} alt="" />
        <p className="College-text">{item.title}</p>
      </div>
    </div>
  );
}

export default College;
