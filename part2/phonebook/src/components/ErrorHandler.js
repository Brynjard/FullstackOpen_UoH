import React from 'react'
import '/Users/brynjard/Documents/FullstackOpen_UoH/part2/phonebook/src/index.css'


const ErrorHandler = ({errorMessage}) => {
    if (errorMessage === ''){
        return null
    }
    return (
        <div className = "error">
            {errorMessage}
        </div>
    )
}

export default ErrorHandler