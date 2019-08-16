import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

//get all entries from server: 
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

//Saves newObject to server. 
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteEntry = entryObject => {
    const request = axios.delete(`http://localhost:3001/persons/${entryObject.id}`)
    return request.then(response => response.data)
}

const update = (id, newEntry) => {
    const request = axios.put(`${baseUrl}/${id}`, newEntry)
    return request.then(response => response.data)
}

export default {
    getAll, 
    create, 
    deleteEntry, 
    update
}
