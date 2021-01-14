import React from 'react';
import PropTypes from 'prop-types';
import './themes-image.css';

function ThemesImage({ openListClick, item }) {
  const openClick = () => {
    openListClick(item);
  };
  return (
    <div className="Themes-title" onClick={openClick}>
      <div>{item.title}</div>
    </div>
  );
}

ThemesImage.propTypes = {
  props: PropTypes.object
};

export default ThemesImage;
