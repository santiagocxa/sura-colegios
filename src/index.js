import React from 'react';
import { render } from 'react-dom';
import data from './api.json';
import Home from './containers/home';

const home = document.getElementById('home');

render(<Home data={data} />, home);
