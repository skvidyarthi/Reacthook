import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counterwithoutclass from './Counterwithoutclass';
import * as serviceWorker from './serviceWorker';
import Employee from './Employee';
import AllPosts from './Posts/AllPosts';
import CityData from './City/CityData';

ReactDOM.render(<div><Employee />,<CityData/></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
