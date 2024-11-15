import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../services/axios.js'
import updateIsLoggedIn from "./auth-thunks.js";


const authSlice =
    createSlice({
        name: 'auth',
        initialState:{isLoggedIn:false},
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(updateIsLoggedIn.fulfilled,(state,action)=>{
                 state.isLoggedIn = action.payload;
            } );
        }
    });

export default authSlice;


