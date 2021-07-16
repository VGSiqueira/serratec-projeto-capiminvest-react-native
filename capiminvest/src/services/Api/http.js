import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const http=axios.create({
    baseURL: 'http://192.168.1.64:8080/'
})
http.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) =>{
        return Promise.reject(error)
    },
)


export default http;