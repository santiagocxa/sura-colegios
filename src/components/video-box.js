import React from 'react';
import '../assets/styles/video-box.css';
import Title from './title';
import Video from './video';

function VideoBox(props) {
  return (
    <div className='Video-box'>
      <Video src={props.src} />
      <Title title={props.title} />
    </div>
  );
}

export default VideoBox;
