import React from 'react';
import './App.css';
import {Header, Footer} from './Components/Layouts'
import Exercises from './Components/Exercises'
import {muscles, exercise} from './store.js'


function App() {
  return (
    <div className="App">

     <Header/>

      <Exercises/>

     <Footer muscles = {muscles}/>

    </div>
  );
}

export default App;
