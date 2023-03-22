import {loginStart,loginSuccess,loginFail} from './userRedux';
import {addProduct,reset} from './cartRedux';
import {publicRequest} from '../requestMethod';

export const productList = async (id,dispatch,newProduct=false)=>{
    try {
        dispatch(reset());
        publicRequest.get(`api/cart/find/${id}`).then(res=>{
            let product = res.data;
            product.map(item=>{dispatch(addProduct(item))})
        })
    } catch (error) {
        
    }
}

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        publicRequest.post('api/auth/login',user).then(res=>{
            dispatch(loginSuccess(res.data));
            let id = res.data._id;
            productList(id,dispatch);
        }).catch(error=>{
            dispatch(loginFail())
        })
    } catch (error) {
        console.log(error)
    }
}