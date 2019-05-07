import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  render() {
    return (
      <div className="Video">
        <video
          className="Video-content"
          autoPlay={this.props.autoplay}
          src={this.props.src}
          controls
          controlsList="nodownload"
        />
      </div>
    );
  }
}

export default Video;
