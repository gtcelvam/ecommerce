import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartRedux';
import userSlice from './userRedux';


export let store = configureStore({
    reducer : {
        cart : cartSlice,
        user : userSlice,
    }
});
