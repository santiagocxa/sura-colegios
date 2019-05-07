import React from 'react';
import './video-media-player.css';

function VideoMediaPlayer(props) {
  return (
    <div className="VideoMediaPlayer">
      {props.children}
      <button
        className="VideoMediaPlayer-close"
        onClick={props.closeVideoPlayerClick}
      />
    </div>
  );
}

export default VideoMediaPlayer;
