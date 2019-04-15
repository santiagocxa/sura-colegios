import React from 'react';
import ThemesImage from './themes-image';
import './themes.css'

function Themes (props){
    return(
        <div className="Themes">
            {
                props.themes.map((item) => {
                    return <ThemesImage 
                                image={item.image} 
                                key={item.id} 
                                openClick={props.openClick} 
                            />
                })    
            }
        </div>
    )
}

export default Themes