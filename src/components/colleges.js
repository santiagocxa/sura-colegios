import React from 'react';
import College from './college';
import TitleThemes from './title-themes';
import '../assets/styles/colleges.css';

function Colleges(props) {
  return (
    <div className='Colleges'>
      <TitleThemes title={props.containerList.colleges[0].title} />
      {props.containerList &&
        props.containerList.colleges[0].playlist.map((item) => (
          <College
            item={item}
            key={item.id}
            openVideoPlayer={props.openVideoPlayerClick}
          />
        ))}
      <TitleThemes title={props.containerList.colleges[1].title} />
      {props.containerList &&
        props.containerList.colleges[1].playlist.map((item) => (
          <College
            item={item}
            key={item.id}
            openVideoPlayer={props.openVideoPlayerClick}
          />
        ))}
    </div>
  );
}

export default Colleges;
