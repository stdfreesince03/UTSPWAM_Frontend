import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../services/axios.js'
import updateIsLoggedIn from "./auth-thunks.js";


const authSlice =
    createSlice({
        name: 'auth',
        initialState:{
            isLoggedIn:false,
            userID :null,
            role:null
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(updateIsLoggedIn.fulfilled,(state,action)=>{
                 state.isLoggedIn = action.payload.isLoggedIn;
                 state.userID = action.payload.id;
                 state.role = action.payload.role;
            } );
        }
    });

export default authSlice;


