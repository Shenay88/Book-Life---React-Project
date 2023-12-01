
const baseUrl = 'http://localhost:3030/users';

export const loginUser = async (userData) => {

    const req = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })

    const user = await req.json();
    return user;
}