import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'



const App = () => {
    const [allCountries, setAllCountries] = useState([])
    const [matchingCountries, setNewCountries] = useState([])
    const [filter, setNewFilter] = useState('Find country by keyword..') 
    //Storing info about all countries.
    let countries;

    useEffect(() => {
        console.log('Getting data from server')
        axios
        .get('http://restcountries.eu/rest/v2/all')
        .then(response => {
            setAllCountries(response.data)
            
        })
        
    }, [])
    console.log(countries)
    
    const useFilter = (event) => {
        let newFilter = event.target.value

    }



    return (
        <div>
            <h1>Country-finder:</h1>
            <div>
                Find countries: <input onChange = {useFilter}/>
            </div>
        </div>

    )
}
ReactDOM.render(<App />, document.getElementById('root'));

