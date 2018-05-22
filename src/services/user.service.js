//backend api calls for performing CRUD operations on user data,
//as well as logging and out of the application
import { authHeader } from '../helpers/auth-header';

export const userService = {
    
    logout,
    getAll
};



function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}
