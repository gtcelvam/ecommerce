import {createSlice} from '@reduxjs/toolkit';
import {Navigate} from 'react-router-dom';

const userSlice = createSlice({
    name : 'user',
    initialState : {
        isFetching : false,
        activeUser : null,
        error : false
    },
    reducers:{
        loginStart : state=>{
            state.isFetching = true
        },
        loginSuccess : (state,action)=>{
            state.isFetching = false;
            state.activeUser = action.payload
        },
        loginFail : state=>{
            state.isFetching = false;
            state.error = true
        },
        logout : state => {
            state.activeUser = null;
            <Navigate to='/'/>
        }
    }
});

export const {loginStart,loginSuccess,loginFail,logout} = userSlice.actions;
export default userSlice.reducer