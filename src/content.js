import React, {Component} from 'react';
import Media from './media.js';
import Playlist from './playlist.js';
import './media.css'


class App extends Component{
  render(){
    const colegios = this.props.data.index[0].categories;
    const listvideo = this.props.data.index[0].categories[0].playlist;
    console.log(this.props.data);
    console.log(listvideo);
    return(
      <div className="Capsule">
        <div className="Logo">
          <img src="./imagevideo/logoSura.png" alt="logo"/>
        </div>
        <div className="Line"> 

        </div>
        <div className="Themes">
          {
            colegios.map((item) => {
              return <Media {...item} key={item.id} />
            })
          }
        </div>
        <div className="Playlist">
            {
              listvideo.map((item) => {
                return <Playlist {...item} key={item.id}/>
              })
            }
        </div>
        <div className="Footer">
        <p>By: Santiago Sucerquia </p>
        </div>
      </div>
    )
  }
}
export default App;