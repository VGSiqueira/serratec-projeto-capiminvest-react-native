import axios from 'axios'

const acoes = axios.create({
    baseURL: 'https://www.okanebox.com.br/api/'
})

export default acoes