import React from 'react';
import ThemesImage from './themes-image';
import './themes.css';

function Themes(props) {
  return (
    <div className="Themes">
      {props.themes.map(item => {
        return (
          <ThemesImage
            item={item}
            key={item.id}
            openListClick={props.openClick}
          />
        );
      })}
    </div>
  );
}

export default Themes;
