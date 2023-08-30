import axios from "axios";

const api = axios.create({
    baseURL: "https://64edd1431f8721827141cc5a.mockapi.io/api/v1/"
})

export default api;