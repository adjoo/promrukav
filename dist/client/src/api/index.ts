import axios from 'axios'

export const API_URL = 'http://localhost:5000'

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        "API-KEY": 'ACCESS_KEY'
    }

});


export const authAPI = {

    async getMe() {
        return await api.get("/api/auth")
    },
    async logIn(login: string, password: string) {
        return await api.post("/api/auth", {login, password})
    },
    async logOut() {
        return await api.delete("/api/auth")
    },
}
