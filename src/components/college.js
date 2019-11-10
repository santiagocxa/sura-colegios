import React from 'react';
import PropTypes from 'prop-types';
import './college.css';

function College({ openVideoPlayer, item }) {
  const openClick = () => {
    openVideoPlayer(item);
  };
  return (
    <div onClick={openClick} className="College">
      <img className="College-image" src={item.image} alt="" />
      <p className="College-text">{item.title}</p>

      <svg
        class="video-overlay-play-button"
        viewBox="0 0 200 200"
        alt="Play video"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke-width="15"
          stroke="#fff"
        />
        <polygon points="70, 55 70, 145 145, 100" fill="#fff" />
      </svg>
    </div>
  );
}

College.propTypes = {
  props: PropTypes.object
};

export default College;
