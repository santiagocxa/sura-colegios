import React from 'react';
import { render } from 'react-dom';
import data from './data.json';
import Home from './containers/home';
import * as serviceWorker from './serviceWorker';

const home = document.getElementById('home');

render(<Home data={data} />, home);

serviceWorker.unregister();
