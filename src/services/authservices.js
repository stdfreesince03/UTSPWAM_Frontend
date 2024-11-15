// src/services/authServices.js
import api from './axios';
import updateIsLoggedIn from '../redux/slices/auth-thunks';

export const login = async (email, password, role, dispatch, navigate) => {
    try {
        const { data } = await api.post('/login', {
            email, password, role
        }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (data.user) {
            console.log('Login Successful');
            dispatch(updateIsLoggedIn());
            navigate('/');
        }

        return data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.error);
        } else {
            console.log("An unexpected error occurred.");
        }
        throw error;
    }
};

export const logout = async (dispatch, navigate) => {
    try {
        await api.post('/logout', {}, {
            withCredentials: true,
        });

        dispatch(updateIsLoggedIn());
        navigate('/login');
    } catch (error) {
        console.error("Error during logout:", error);
        throw error;
    }
};


export const signUp = async (firstName, lastName, email, password, role, dispatch, navigate) => {
    try {
        const { data } = await api.post('/signup', {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            role,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (data.user) {
            console.log('Signup Successful');
            dispatch(updateIsLoggedIn());
            navigate('/');
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.error);
        } else {
            console.log("An unexpected error occurred.");
        }
        throw error;
    }
};

export function handleGoogleLogin(role) {
    console.log(role);
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google?role=${role}`;
}