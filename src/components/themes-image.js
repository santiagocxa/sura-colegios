import React from 'react';
import PropTypes from 'prop-types';
import './themes-image.css';

function ThemesImage({ openListClick, item }) {
  const openClick = () => {
    openListClick(item);
  };
  return (
    <div>
      <img onClick={openClick} className="Image" src={item.image} alt="" />
    </div>
  );
}

ThemesImage.propTypes = {
  props: PropTypes.object
};

export default ThemesImage;
