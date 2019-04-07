import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css'

class Media extends Component{
    render(){
        return(
        <div className="Media" onClick={this.handleClick}>
            <img className="Media-image"
              src={this.props.image}
              alt=""
            />
        </div>
      )
    }
}

Media.propTypes = {
  title: PropTypes.string
}

export default Media;