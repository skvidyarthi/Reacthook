import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './App';
import Counterwithoutclass from './Counterwithoutclass';
import * as serviceWorker from './serviceWorker';
import Employee from './Employee';
import AllPosts from './Posts/AllPosts';
import CityData from './City/CityData';
import CurrentNews from './News/CurrentNews';
import Fetchposts from './hooks/Fetchposts'
import Covid19 from './Covid19/CovidData';
import UserDetailsComponent from './Context/UserDetailsComponent';
import Login from './login';

ReactDOM.render(<div><Login /></div>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
