import React from 'react'
import '/Users/brynjard/Documents/FullstackOpen_UoH/part2/phonebook/src/index.css'

const AddPersonFeedback = ({addedPersonName}) => {
    if (addedPersonName === ''){
        return null
    }
    return (
        <div className = "addfeedback">
            {`${addedPersonName} was added to the phonebook.`}
        </div>
    )
}

export default AddPersonFeedback