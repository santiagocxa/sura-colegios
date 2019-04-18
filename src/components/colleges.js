import React from 'react';
import College from '../components/college';
import './colleges.css';
import Presentacion from './presentacion';

function Colleges(props) {
  return (
    <div className="Colleges">
      {/* <pre>{JSON.stringify(props.containerList, null, 2)}</pre> // pinta el objeto en html.  */}
      <div>
        <p>presentacion</p>
      </div>
      {props.containerList &&
        props.containerList.playlist.map(item => {
          return <College item={item} key={item.id} />;
        })}
    </div>
  );
}

export default Colleges;
