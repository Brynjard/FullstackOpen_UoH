import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({clickHandler, text}) => {
    
    return (
        <button onClick = {clickHandler}>
            {text}
        </button>
        );
}






const App = () => {
    
    //save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>Give feedback</h1>
            <Button text = "good" clickHandler = {() => {setGood(good + 1)}}/>
            <Button text = "neutral" clickHandler = {() => {setNeutral(neutral + 1)}}/>
            <Button text = "bad" clickHandler = {() => {setBad(bad + 1)}}/>
            <h1>Statistics</h1>
            <h4>Good: {good}</h4>
            <h4>Neutral: {neutral}</h4>
            <h4>Bad: {bad}</h4>
            <h4>all: {good + bad + neutral}</h4>
            <h4>Average: {(good - bad) / (good + bad + neutral)}</h4>
            <h4>Positive: {(good / (good + bad + neutral)) * 100}%</h4>
        </div>
    );
}




ReactDOM.render(<App />, document.getElementById('root'));