import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import '../App.css';
import '../css/Register.css'
// import Settings from './Settings';
import Login from '../../oldcontent/Login'
// import { CurrentUser } from './CurrentUser'

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [result, setResult] = useState({});
    const [clickAuth, setClickAuth] = useState(false)

    const auth = () =>{
        
        const authObj = {
            email: email,
            password: password
        }
                    
        axios.post("http://localhost:8081/auth/register", authObj)
        .then(res => {
            console.log("res returned:", res.data);
            setResult(res.data)
            setClickAuth(true)
        })
        .catch(err => {
            console.error(err);
        });
        
    }
    console.log("here",email,password,clickAuth)
    if (email && password && clickAuth) {
        return (
            <div>
                <Login />
            </div>
        )
    } 
    
    else {

        return (
            <div className="content">
                <img id="logo" src="/public/assets/Empowerteen Logo-05.jpg" />
                
                <div className="register">
                    <img src="https://www.empowerteen.org/wp-content/uploads/2018/03/bigstock-High-School-Students-Taking-Pa-66792271.jpg" alt="" className="bgPicture" />

                    <div className="loginBox">
                        
                        <hr size="1" />
                        <div className="emailSignup">
                            <div>
                                <p className="fieldLabel entryStatusLabel">Email</p>
                                <input className="field entryStatus" id="email" placeholder="Your email ID" onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div>
                                <p className="fieldLabel entryStatusLabel">Create Password</p>
                                <input className="field entryStatus" id="createPassword" placeholder="Create Password" onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <div>
                                <p className="fieldLabel entryStatusLabel">Confirm Password</p>
                                <input className="field entryStatus" id="confirmPassowrd" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                            </div>                        
                        </div>
                            {/* SIGN UP BUTTON */}
                        <button onClick={auth}>Sign Up</button>
                        {/* <div id="or" >OR</div>
                        <div className="fedAuth">
                            <img disabled="disabled" className="fedAuthIcon entryStatus" id="google" src="https://developers.google.com/identity/images/g-logo.png" />
                            <img disabled="disabled" className="fedAuthIcon entryStatus" id="facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_(2019).png/1200px-Facebook_Logo_(2019).png" />
                            <img disabled="disabled" className="fedAuthIcon entryStatus" id="instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" />
                            <img disabled="disabled" className="fedAuthIcon entryStatus" id="twitter" src="http://pluspng.com/img-png/twitter-png-logo-twitterbird-1528.png" />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}



