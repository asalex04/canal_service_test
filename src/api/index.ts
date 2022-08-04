import axios from "axios";

const $authHost = axios.create({
    baseURL: 'http://localhost:7000/'
})

const $fetchHost = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})


export {$authHost, $fetchHost}
