import React from 'react';
import Playlist from '../components/playlist';
import './themes.css'

function College (props){
    return(
        <div>
            {
                props.listaoculta &&
                <Playlist 
                    playlist={props.playlist} 
                />
            }
        </div>
    )
}

export default College