import React from 'react';
import { render } from 'react-dom';
import data from './api.json';
import Home from './containers/home';

const content = document.getElementById('content');
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//ReactDOM.render(/*<App />*/ <h1>Hola Mundo1 </h1>, document.getElementById('content'));
//render(<Media title="Inscribir Estudiante..." nombre="Santiago " image={img}/>, app);
//serviceWorker.unregister();

render(<Home data={data} />, content);
