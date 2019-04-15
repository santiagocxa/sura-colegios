import React, {Component} from 'react';
import './media.css';

class Media extends Component{
    render(){
        return(
        <div className="Media">
          <div>
            <img className="Media-image"
              src={this.props.image}
              alt=""
            />
            <p className="Media-text">{this.props.title}</p>
          </div>
        </div>
      )
    }
}

export default Media;