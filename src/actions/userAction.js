import {    USER_LOGIN_FAIL ,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    
} 
from "../Types/userTypes"
import axios from "axios"
export const login = (email,password)=> async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST,
        })
        const config = {
            headers:{
                'Content-Type' : 'application/json'
            }
        }
     const {data}  = await axios.post('http://localhost:5001/login',{email,password},config)
     localStorage.setItem('userInfo',JSON.stringify(data))
     dispatch({type:USER_LOGIN_SUCCESS,payload:data})
    }catch(error) {
        dispatch({type:USER_LOGIN_FAIL, 
            payload: error.response &&
             error.response.data.message?
            error.response.data.message:error.message}
            )
    }
}
export const logout = ()=> async(dispatch)=>{

}