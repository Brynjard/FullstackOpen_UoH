import React from 'react'

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

export default FormAddPerson