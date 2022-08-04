import {$authHost} from "./index";


export const authorization = async (login: string, password: string) => {
    const response = await $authHost.post('login', {login, password})
    response.data === false
        ?
        alert('Wrong login or password')
        :
        localStorage.setItem('token', JSON.stringify(response.data))

    return response.data
}
