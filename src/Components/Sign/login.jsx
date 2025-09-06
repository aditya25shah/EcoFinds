import React, {useState} from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate=useNavigate();

    function handleSubmit(){

        const user=document.getElementById("userid").value;
        const userpass=document.getElementById("userpass").value;

        if(user == "aditya546shah" && userpass == "123456" ){
            navigate('/dashboard')
        }else{
            alert('Invalid Credentials')
        }

    }
    return(
        <>
            <div id="login-form">
                <input 
                placeholder='Enter your Username' 
                type="text" 
                className="aditya" 
                id="userid" 
                required/>
                <input 
                placeholder='Enter Your PassWord' 
                type="password" 
                id="userpass" 
                required/>

                <button className='btn'
                onClick={handleSubmit}> Login </button>
            </div>
        </>
    );
}

export default Login