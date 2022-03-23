import React from 'react';
import '../assets/styles/college.css';

function College({ openVideoPlayer, item }) {
  const openClick = () => {
    openVideoPlayer(item);
  };

  return (
    <div onClick={openClick} className='College'>
      <p className='College-text'>{item.title}</p>
    </div>
  );
}

export default College;
