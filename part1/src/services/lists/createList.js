import axios from 'axios'

export const createList = (newNoteApi) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', newNoteApi)
        .then((response) => {
            const { data } = response
            return data
        })
}