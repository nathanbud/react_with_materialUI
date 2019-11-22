import React, {Component} from 'react';
import './App.css';
import {Header, Footer} from './Components/Layouts'
import Exercises from './Components/Exercises'
import {muscles, exercises} from './store.js'


class App extends Component {

state ={
  exercises
  }

  

  getExercisesByMuscles(){
    return Object.entries(this.state.exercises.reduce((exercises, exercise)=>{
      const {muscles} = exercise
        exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]

        return exercises
    }, {})
    )
  }

  render(){

    console.log(this.getExercisesByMuscles());

    return (
      <div className="App">
  
       <Header/>
  
        <Exercises/>
  
       <Footer muscles = {muscles}/>
  
      </div>
    );
  }

  }


export default App;
