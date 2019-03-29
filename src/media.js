import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css'
//import image from './imagevideo/matricularCurso.png';

class Media extends Component{

  state = {
    nombre: 'Santiago'
  }
  
  handleClick = (event) => {
    this.setState({
      nombre: 'Santiago Sucerquia'
    })
   
  }

  render(){
      return(
      <div className="Media" onClick={this.handleClick}>
          <img className="Media-image"
            src={this.props.image}
            alt=""
            width={200}
            height={200}
          />
          {/* <div className="Media-text">
              <h3>{this.props.title}</h3>
              <p>{this.props.nombre}</p>
          </div> */}
          
      </div>
    )
  }
}

Media.propTypes = {
  title: PropTypes.string
}

export default Media;