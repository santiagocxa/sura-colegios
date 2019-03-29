import React from 'react';
import {render} from 'react-dom';
import Playlist from './playlist.js'; 
import data from './api.json';
//import img from './video/0001.png'



const app = document.getElementById('content');
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//ReactDOM.render(/*<App />*/ <h1>Hola Mundo1 </h1>, document.getElementById('content'));
//render(<Media title="Inscribir Estudiante..." nombre="Santiago " image={img}/>, app);
//serviceWorker.unregister();


 render(<Playlist data={data}/>, app )
