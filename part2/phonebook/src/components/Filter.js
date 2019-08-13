import React, { useState } from 'react'
import Person from './Person'

const Filter = ({persons, filter}) => {
    let filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        filteredPersons.map(person => <Person key = {person.id} person = {person}/>)
    )
    
}
export default Filter