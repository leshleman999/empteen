import React, {useState,useContext,useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios'
import Home from '../Home'
import ManageMembers from '../ManageMembers'
import {Link} from 'react-router-dom';
import { EmpTeenContext } from '../../App'
import { EmpTeenUserEnvs } from '../../App'

export default function Login() {
    const [user, setUser] = useContext(EmpTeenContext)
    const [userEnvs, setUserEnvs] = useContext(EmpTeenUserEnvs)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   
    useEffect(()=>{
console.log("useEffect is running")
     
    },[])
      
    const loginUser = async (e) => {
        e.preventDefault();

    axios.post('http://localhost:5000/signin',{email:"harry@gmail.com",password:"h"})
            .then((result) => {
console.log("will set user")
                setUser(result.data)
            })
            .catch((err) => {
                // console.error("error",err);
                if(err.status === 400 || !err) {
                    window.alert("Invalid Credentials");
                } 
            });
    } 

    

console.log('user.email',user.email)

       
    if (user.email !=="xxx"){
console.log("here")
        return (
            // <div><p>test</p></div>
            <Home />  
        )
        } else {
console.log("show login form")
        return (
            <>
                <section className="sign-in">
                    <div className="container mt-5">
                        <div className="signin-content">

                            <div className="signin-image">
                                <figure>
                                    <img src="" alt="Login pic" />
                                </figure>
                                <NavLink to="/signup" className="signup-image-link"> Need an account?  Sign Up!</NavLink>
                            </div>


                            <div className="signin-form">
                                <h2 className="form-title">Login</h2>

                                <form method="POST" className="register-form" id="register-form"> 
                                
                                <div className="form-group">
                                    <input type="text" name="email" id="email" autoComplete="off"
                                        value="harry@gmail.com"
                                        onChange = {(e) => setEmail(e.target.value)}
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value="h"
                                        onChange = {(e) => setPassword(e.target.value)}
                                        placeholder="Your Password"
                                    />
                                </div>

                            

                                <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin" className="form-submit"
                                            value="Log In"
                                            onClick={loginUser} />
                                </div>

                        </form>
                        </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}


