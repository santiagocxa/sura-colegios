import { Component } from 'react';
import { createPortal } from 'react-dom';

class VideoMediaPlayer extends Component {
  render() {
    return createPortal(
      this.props.children,
      document.getElementById('video-media-player')
    );
  }
}

export default VideoMediaPlayer;
