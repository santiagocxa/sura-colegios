import React, {Component} from 'react';
import Media from './media.js';
import './media.css'

class Playlist extends Component{
  render(){
    const playlist = this.props.data.index[0].categories;
    console.log(this.props.data);
    return(
      <div className="Capsule">
        <div className="Logo">
        
        </div>
        <div className="Themes">
          {
            playlist.map((item) => {
              return <Media {...item} key={item.id} />
            })
          }
        </div>
        <div className="Playlist">
        
        </div>
        <div className="Footer">
        
        </div>
      </div>
    )
  }
}
export default Playlist;