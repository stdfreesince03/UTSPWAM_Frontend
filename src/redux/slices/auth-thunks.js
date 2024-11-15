import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../services/axios.js";

const updateIsLoggedIn = createAsyncThunk(
    'auth/updateIsLoggedIn',
    async () => {
        const response = await api.get('/auth/check');
        console.log("data.loggedin:" ,response.data.isLoggedIn);
        return response.data.isLoggedIn;
    }
);


export default updateIsLoggedIn;