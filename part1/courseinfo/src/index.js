import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Part = (props) => {
  return (
    <p>
    {props.part} {props.exercises}
    </p>
  );
}

const Content = (props) => {
  return (
    <div>
    <p>
    {props.part1} {props.exercises1}
    </p>
    <p>
    {props.part2} {props.exercises2}
    </p>
    <p>
    {props.part3} {props.exercises3}
    </p>
    </div>
  );
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.course1 + props.course2 + props.course3}</p>
  );
}


const App = () => {
  const course = {
      
      name : 'Halfstack application development', 
      
      parts : [{
        name : "Fundamentals of react",
        exercises : 10
      },
               
      {
        name: 'Using props to pass data',
        exercises: 7
      },
               
      {
        name: 'State of a component',
        exercises: 14
      }]
      
  };


  return(
    <div>
    <Header course = {course.name} />
    <Content part1 = {course.parts[0].name} exercises1 = {course.parts[0].exercises}
            part2 = {course.parts[1].name} exercises2 ={course.parts[1].exercises}
            part3 = {course.parts[2].name} exercises3 ={course.parts[2].exercises} />
    <Total course1 = {course.parts[0].exercises} course2 = {course.parts[1].exercises} course3 = {course.parts[2].exercises} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


//Nettopp ferdig med 1.4
