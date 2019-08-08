import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({clickHandler, text}) => {
    
    return (
        <button onClick = {clickHandler}>
            {text}
        </button>
        );
}

const Statistics = ({good, neutral, bad, all, average, positiveAverage}) => {

    if (all === 0){
        return (
            <div>
            <h1>Statistics</h1>
            <h4>No feedback given.</h4>
            </div>
            
        );
    }

    return (
        <div>
            <table>
                <tbody>
                
                    <Statistic text = "Good: " value = {good}/>
                    <Statistic text = "Neutral: " value = {neutral}/>
                    <Statistic text = "Bad: " value = {bad}/>
                    <Statistic text = "All: " value = {all}/>
                    <Statistic text = "Average: " value = {average}/>
                    <Statistic text = "positive: (%)" value = {positiveAverage}/>

                </tbody>
            </table>
        </div>
    );
};

const Statistic = ({text, value}) => {
    return(
        
            <tr>
            <td>{text}</td>
            <td>{value}</td>
            </tr>
        
    );
};


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
            
            <Statistics good = {good} neutral = {neutral} bad = {bad} all = {good + bad + neutral} average = {(good - bad) / (good + bad + neutral)} positiveAverage = {(good / (good + bad + neutral)) * 100} />
            
        </div>
    );
}




ReactDOM.render(<App />, document.getElementById('root'));