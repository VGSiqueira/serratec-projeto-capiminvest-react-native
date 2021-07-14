import axios from 'axios';

const cotacoes = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/last/'
})

export default cotacoes