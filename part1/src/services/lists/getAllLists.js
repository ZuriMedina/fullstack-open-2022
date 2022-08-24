import axios from 'axios'

export const getAllLists = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const { data } = response
            return data
        })
}