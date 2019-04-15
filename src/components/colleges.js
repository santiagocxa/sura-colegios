import React from 'react';
import College from '../components/college';
import './colleges.css'

function Colleges (props){
    return(
        <div className="Colleges">
            {
                props.colleges.map((item) => {
                    return  <College {...item}   
                            key={item.id}
                            listaoculta={props.listaoculta}
                            />
                })
            }
        </div>
    )
}

export default Colleges