import axios from 'axios'

export const API = axios.create({
    baseURL: 'https://localhost:7254/api/',
    validateStatus(status) {
        return status >= 200 && status < 500
    }
})
export default defineNuxtPlugin(() => { });