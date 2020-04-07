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
      />
    </div>
  );
}

College.propTypes = {
  props: PropTypes.object
};

export default College;
