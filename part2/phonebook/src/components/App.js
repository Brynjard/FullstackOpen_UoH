import React, { useState } from 'react'



const App = () => {
    
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', 
        id: 1,
        number: 94812394}, 
        { name: 'Arthur Lange', 
        id: 2,
        number: 15294056}, 
        { name: 'Howard Stern', 
        id: 3,
        number: 58695842}
  ]) 
  const [ newName, setNewName ] = useState('Register new person...')
  const [newNumber, setNewNumber] = useState('Add Phonenumber...')
  const [filter, setNewFilter] = useState('')
  
  
  const handleNameChange = (event) => {
      setNewName(event.target.value)
      
  }

  const handleNumChange = (event) => {
      setNewNumber(event.target.value)
  }


  const addPerson = (event) => {
    event.preventDefault()

    let counter = 0;
    let size = persons.length;
    persons.forEach(person => {
        if (person.name !== newName){
            counter ++;
        }
    })
    //If the person is not registered beforehand:
    if (counter === size){
        const personObject = {
            name : newName,
            id : persons.length + 1,
            number : newNumber
        }
        
        setPersons(persons.concat(personObject));
        setNewName('')
        setNewNumber('')
    //If already registered:
    } else {
        alert(newName + " is already registered.")
        setNewName('')
        setNewNumber('')
    }
  }

  //When filter-input is changed, filter-state changes accordingly.
  const useFilter = (event) => {
      setNewFilter(event.target.value)
      
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          Filter shown with: <input onChange ={useFilter}/>
      </div>
      
      <FormAddPerson addPersonFunc = {addPerson} newNameFunc = {newName} handleNameChangeFunc = {handleNameChange} newNumberFunc = {newNumber} handleNumChangeFunc = {handleNumChange} />
      <h2>Numbers</h2>
      {/* Rendering filtered out persons only: */}
      <Filter persons = {persons} filter = {filter}/>
      
    </div>
  )
}

const FormAddPerson = ({addPersonFunc, newNameFunc, handleNameChangeFunc, newNumberFunc, handleNumChangeFunc}) => {
    return (
        <form onSubmit = {addPersonFunc}>
        <div>
          name: <input value = {newNameFunc} onChange = {handleNameChangeFunc}/>
        </div>
        <div>
            number: <input value = {newNumberFunc} onChange = {handleNumChangeFunc}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}



const Filter = ({persons, filter}) => {
    let filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        filteredPersons.map(person => <Person key = {person.id} person = {person}/>)
    )
    
}

const Person = ({person}) => {
    return (
        <p key = {person.id}>
            {person.name} - {person.number}
        </p>
    )
}

export default App