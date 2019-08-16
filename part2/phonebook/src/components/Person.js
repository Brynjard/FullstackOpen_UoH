import React from 'react'
const Person = ({person, deleteEntry}) => {
    return (
        <p key = {person.id}>
            {person.name} - {person.number}
            <button onClick = {() => {deleteEntry(person)}}>Delete entry</button>
        </p>
    )
}
export default Person