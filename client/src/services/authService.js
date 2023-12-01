
const baseUrl = 'http://localhost:3030/users';

export const loginUser = async (loginData) => {

    const req = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
    });

    const user = await req.json();
    return user;
}

export const registerUser = async (registerData) => {

    const req = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(registerData)
    });

    const newUser = await req.json();

    return newUser;
}