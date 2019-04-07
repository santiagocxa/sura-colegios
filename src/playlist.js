import React, {Component} from 'react';
import './media.css'


class Playlist extends Component{
    render(){
        return(
            <div className="Media-playlist">
                <img className="Media-playlist-image"
                src={this.props.image}
                alt=""/>
                <p className="Text-playlist">{this.props.title}</p>
                <div>
                
                </div>  
            </div>
            
        )
    }

} 

export default Playlist;