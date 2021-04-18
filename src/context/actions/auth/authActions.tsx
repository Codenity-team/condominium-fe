import { typeAuth } from "./type"


export const login = (uid, username) =>({
    type: typeAuth.login,
    payload: {
        uid,
        name: username
    }
})

export const register = () =>({
    type: typeAuth.logout
})