
const baseUrl = 'http://localhost:3030/users';

import bcrypt from 'bcryptjs';
import { get, post } from '../lib/request';


export const loginUser = async (email, password) => {

    const user = await post(`${baseUrl}/login`, {
        email,
        password
    });

    return user;

}

export const registerUser = async (username, email, password) => {

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await post(`${baseUrl}/register`, {
        username,
        email,
        password: hashedPassword
    });

    return newUser;

}

export const logoutUser = () => get(`${baseUrl}/logout`);