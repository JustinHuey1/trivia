import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';

import {buildFirebase} from './clients/firebase.js';
var database = buildFirebase();
var databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
 const questions = Object.values(data.val());
 const choices = questions[1].choices
 console.log(questions);
 console.log(choices);
 debugger;
 ReactDOM.render(<App question={questions}/>, document.getElementById('root'));
});





