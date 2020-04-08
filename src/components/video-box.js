import React from 'react';
import '../components/video-box.css';
import Title from './title';
import Video from './video';

function VideoBox(props) {
  return (
    <div className="VideoBox">
      <Video autoplay={true} muted={props.muted} src={props.src} />
      <Title title={props.title} />
    </div>
  );
}

export default VideoBox;
