import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        product : [],
        quantity : 0,
        total : 0
    },
    reducers :{
        addProduct : (state,action)=>{
            state.quantity += 1;
            state.product.push(action.payload.products);
            state.total += action.payload.products[0].price * action.payload.products[0].quantity;
        },
        reset : state=>{
            state.product = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
});

export const {addProduct,reset} = cartSlice.actions;
export default cartSlice.reducer;