
const baseUrl = 'http://localhost:3030/users';

import { get, post } from '../lib/request';


export const loginUser = async (email, password) => {

    const user = await post(`${baseUrl}/login`, {
        email,
        password
    });

    return user;

}

export const registerUser = async (username, email, password) => {

    const newUser = await post(`${baseUrl}/register`, {
        username,
        email,
        password
    });

    return newUser;

}

export const logoutUser = () => get(`${baseUrl}/logout`);