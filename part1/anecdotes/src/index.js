import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const randomizer = () => {
    return Math.floor(Math.random() * 6);
}
const App = (props) => {
    const [selected, setSelected] = useState(0);
    const votes = Array(6).fill(0);
    console.log(votes);
    
    const upVote = (index) => {
        votes[index] += 1;
    }
    //Får endret state dersom jeg hardkoder at votes skal ha den og den verdien, men ikke i knappen...

    return (
        <div>
            {props.anecdotes[selected]}
            <p>Votes: {votes[selected]}</p>
            <p><button onClick = {() => {setSelected(randomizer)}}>Next anecdote</button></p>
            <button onClick = {upVote(selected)}>vote</button>
        </div>
    );
}
//anecdotes: fra 0 tilogmed 5
const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]




ReactDOM.render(<App anecdotes = {anecdotes}/>, document.getElementById('root'));


