import axios from 'axios';

const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api`,
});



export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isAdmin', response.data.is_admin);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (first_name, last_name, email, password) => {
    try {
        const response = await api.post('/auth/register', { first_name, last_name, email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const token = localStorage.getItem('token');
        await api.post('/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
    } catch (error) {
        throw error;
    }
};

export const getUser = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await api.get('/auth/user', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
