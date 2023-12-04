const request = async (method, url, data) => {

    const options = {
        method,
        headers: {},
    }

    const token = localStorage.getItem('accessToken');

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {

        const response = await fetch(url, options);

        // резултатът може да бъде undefind, но това означава no content, което пак е резултат;
        // 204 - update (password, username, edit) - we just need confirmation.
        if (response.status === 204) {
            return {};
        }

        const resResult = await response.json();
    
        if (response.ok == false) {
            throw resResult;
        }
    
        return resResult;
          
    } catch (error) {
        throw error; 
    }
}


// Partial application
// bind is a method that allows us to create a new function from an existing function, change the new function's this context, and provide any arguments you want the new function to be called with.
// We don't need to bind a context, but bind arguments as second parameter(in this case 'GET', 'POST'...).

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');