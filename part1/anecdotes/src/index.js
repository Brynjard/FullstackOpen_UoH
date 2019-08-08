import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const randomizer = () => {
    return Math.floor(Math.random() * 6);
}





const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [vote, setVote] = useState([0, 0, 0, 0, 0, 0]);
    const handleVotes = (index) => {
        const newVotes = [...vote]
        newVotes[index] ++;
        
        setVote(newVotes);
    }
    
    const mostVotedAnecdote = () => {
        let mostVotedIndex = 0;
        let mostVoted = 0;
        for (let i = 0; i < vote.length; i++){
            if (vote[i] > mostVoted){
                mostVotedIndex = i
                mostVoted = vote[i]
            }
        }
        console.log(vote);
        console.log("most voted: ", mostVotedIndex)
        return mostVotedIndex;

    }

    return (
        <div>
            <h1>Anecdote of the day:</h1>
            {props.anecdotes[selected]}
            <p>votes: {vote[selected]}</p>
            <p><button onClick = {() => {setSelected(randomizer)}}>Next anecdote</button></p>
            <button onClick = {() => handleVotes(selected)}>vote</button>
            <h1>Anecdote with most votes:</h1>
            <p>{props.anecdotes[mostVotedAnecdote()]}.</p>
            <p>has {vote[mostVotedAnecdote()]} votes</p>

        </div>
    );
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]




ReactDOM.render(<App anecdotes = {anecdotes}/>, document.getElementById('root'));


