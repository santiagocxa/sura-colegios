import React from 'react';
import './themes-image.css';

function ThemesImage(props){
    return(
        <div className="ThemesImage" onClick={props.openClick}>
            <img 
                className="Image"
                src={props.image}
                alt=""
            />
        </div>
    )
}

export default ThemesImage