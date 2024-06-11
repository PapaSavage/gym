import axios from 'axios'

export const API = axios.create({
    baseURL: 'http://localhost:5258/api/',
    validateStatus(status) {
        return status >= 200 && status < 500
    }
})
export default defineNuxtPlugin(() => { });