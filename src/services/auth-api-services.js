import config from '../config'
import TokenService from './token-service'

const AuthApiService = {
    postLogin(credentials) {
        console.log(credentials)
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
        .then(res => {
            return (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json() 
        })
        .then(res => {
            //console.log(res)
            TokenService.saveAuthToken(res.authToken)
        })
    },
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default AuthApiService