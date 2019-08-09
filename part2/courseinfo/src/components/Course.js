import React from 'react';

const Header = ({name, id}) => {
    return (
      <h1>{name}, id: {id}</h1>
    );
}
  
const Part = ({name, exercises, id}) => {
return (
    <p>
    {name} {exercises}, id: {id}
    </p>
);
}
  
const Content = ({course}) => {
    let courses = course.parts;

return (
    <div>
        {courses.map(course => <Part key = {course.id} name = {course.name} 
                                exercises = {course.exercises} 
                                id = {course.id}/>)}
    </div>
);
}
  
const Course = ({course}) => {
    return (
        <div>
            <Header name = {course.name} id = {course.id}/>
            <Content course = {course}/>
            <Total course = {course}/>
        </div>
    )
}
  
const Total = ({course}) => {
    let courses = course.parts;
    let listOfCourses = courses.map(course => course.exercises)
    let reducer = (accumulator, currentValue) => accumulator + currentValue
    

return(
    <p><b>Number of exercises: {listOfCourses.reduce(reducer)}</b></p>
);
}

export default Course