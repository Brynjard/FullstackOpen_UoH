import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import FormAddPerson from './FormAddPerson'
import AddPersonFeedback from './AddPersonFeedback'
import ErrorHandler from './ErrorHandler'
import entryService from '/Users/brynjard/Documents/FullstackOpen_UoH/part2/phonebook/src/services/entries'


const App = () => {
    
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('Register new person...')
  const [newNumber, setNewNumber] = useState('Add Phonenumber...')
  const [filter, setNewFilter] = useState('')
  const [addedName, setAddedName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  
  useEffect(() => {
    entryService
    .getAll()
    .then(allEntries => setPersons(allEntries))
    
  }, [])
  //Updating namestate according to form:
  const handleNameChange = (event) => {
      setNewName(event.target.value)
      
  }
  //Delete entry from phonebook:
  const deleteEntry = (person) => {
    if (window.confirm(`Delete ${person.name} from the phonebook?`)){
      entryService
      .deleteEntry(person)
      .then(deletedEntry => {
        const newPersons = persons.filter(entry => entry.id !== person.id)
        setPersons(newPersons)
      })
    }
    

  }
  //Updating number-state from form:
  const handleNumChange = (event) => {
      setNewNumber(event.target.value)
  }
  //Adding person to phonebook:
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
    const personObject = {
        name : newName,
        number : newNumber
    }
    if (counter === size){
        entryService
        .create(personObject)
        .then(newEntry => {
          setPersons(persons.concat(newEntry))
          setNewName('')
          setNewNumber('')
          setAddedName(personObject.name)
          setTimeout(() => {
            setAddedName('')
          }, 2500)
        })
        
    //If already registered:
    } else {
        if (window.confirm(`${personObject.name} is already defined. Would you like to update number?`)){
          const existingEntry = persons.find(p => p.name === personObject.name)
          const updatedEntry = {...existingEntry, number : personObject.number}

          entryService
          .update(existingEntry.id, updatedEntry)
          .then(newEntry => {
            setPersons(persons.map(person => person.name !== newEntry.name ? person : newEntry))
            setAddedName(personObject.name)
          setTimeout(() => {
            setAddedName('')
          }, 2500)
          }).catch(error =>{
            setErrorMessage(`${personObject.name} has already been deleted from server`)
            setTimeout(()=> {
              setErrorMessage('')
            }, 5000)
          } )
        }

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
      <AddPersonFeedback addedPersonName = {addedName}/>
      <ErrorHandler errorMessage = {errorMessage}/>
      <div>
          Filter shown with: <input onChange ={useFilter}/>
      </div>
      
      <FormAddPerson addPersonFunc = {addPerson} newNameFunc = {newName} handleNameChangeFunc = {handleNameChange} newNumberFunc = {newNumber} handleNumChangeFunc = {handleNumChange} />

      <h2>Numbers</h2>
      {/* Rendering filtered out persons only: */}
      <Filter persons = {persons} filter = {filter} deleteEntry = {deleteEntry}/>
      
    </div>
  )
}

export default App