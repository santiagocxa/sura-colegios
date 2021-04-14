import React from 'react';
import '../assets/styles/college.css';

function College({ openVideoPlayer, item }) {
  const openClick = () => {
    openVideoPlayer(item);
  };
  return (
    <div onClick={openClick} className='College'>
      <img className='College-image' src={item.image} alt='' />
      <p className='College-text'>{item.title}</p>
    </div>
  );
}

export default College;
