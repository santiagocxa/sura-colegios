import React from 'react';
import College from '../components/college';
import './colleges.css';

function Colleges(props) {
  return (
    <div className="Colleges">
      {props.containerList &&
        props.containerList.playlist.map(item => {
          return (
            <College
              item={item}
              key={item.id}
              openVideoPlayer={props.openVideoPlayerClick}
            />
          );
        })}
    </div>
  );
}

export default Colleges;
