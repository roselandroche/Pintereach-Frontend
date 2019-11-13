import axios from 'axios'

export function getToken() {
    return localStorage.getItem('token')
}

export default function () {
    return axios.create({
        // need base URL for axios (localhost:5000) example
        baseURL: "",
        headers: {
            Authorization: getToken(),
        }
    })
}