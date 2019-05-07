import React from 'react';
import College from '../components/college';
import VideoPlayer from '../containers/video-player';
import './colleges.css';

function Colleges(props) {
  return (
    <div className="Colleges">
      {!props.hidevideo ? (
        <VideoPlayer
          title="Colegios Viales ARL SURA"
          src="https://colegiosvialesarlsura.com/videos/colegios_viales_promo.mp4"
          autoplay={true}
        />
      ) : (
        props.containerList &&
        props.containerList.playlist.map(item => {
          return (
            <College
              item={item}
              key={item.id}
              openVideoPlayer={props.openVideoPlayerClick}
            />
          );
        })
      )}
    </div>
  );
}

export default Colleges;
