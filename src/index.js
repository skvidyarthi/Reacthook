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
<<<<<<< HEAD


=======
import Fetchposts from './hooks/Fetchposts'
import Covid19 from './Covid19/CovidData';
import UserDetailsComponent from './Context/UserDetailsComponent';
import Login from './login';
import {Form} from './hooks/CounterWithHook';
import ClickTimerGame from './hooks/ClickTimerGame';
>>>>>>> 359284f92085914ed9f8bfb650ffa50f3d3494de

ReactDOM.render(<div><CurrentNews /></div>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
