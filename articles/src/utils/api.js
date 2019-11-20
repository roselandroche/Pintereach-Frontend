import axios from 'axios'

export function getToken() {
    return localStorage.getItem('token')
}

export default function () {
    const token = localStorage.getItem('token')
    return axios.create({
        // need base URL for axios
        baseURL: "https://lambda-bw-pintereach.herokuapp.com/",
        headers: {
            Authorization: token,
        }
    })
}