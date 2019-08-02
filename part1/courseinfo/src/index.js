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
    <Part part = {'fundamentals of react'} exercises = {10}/>
    <Part part = {'Using props to pass data'} exercises = {7}/>
    <Part part = {'State of a component'} exercises = {14}/>
    </div>
  );
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.course1 + props.course2 + props.course3}</p>
  );
}


const App = () => {
  return (
    <div>
    <Header course = {'Half stack application development'} />
    <Content/>
    <Total course1 = {10} course2 = {7} course3 = {14}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
