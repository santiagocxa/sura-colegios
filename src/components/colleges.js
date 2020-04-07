import React from 'react';
import College from '../components/college';
import VideoPlayer from '../containers/video-player';
import './colleges.css';

function Colleges(props) {
  return (
    <div className="Colleges">
      {!props.hidevideo ? (
        <VideoPlayer
          title="Capacitación Virtual De 50 Horas Del SGSST"
          src="https://contenidosdigitalessura.com/videosura/cgr/curso_50_horasintro.mp4"
          muted={true}
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
