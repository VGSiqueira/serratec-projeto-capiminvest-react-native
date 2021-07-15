import axios from 'axios'

const noticias = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=br'
})

export default noticias

noticias.interceptors.request.use(
    (config) => {
        // versão do app
        // autorização
        const token = 'd75c3217364f411f921813462c6e4823'
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (erro) => {
        return Promise.reject(erro)
    },
)