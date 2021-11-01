import React, { useState } from 'react';
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const auth = () =>{
        
        const authObj = {
            email: "test",
            password: "test",
            firstname: "laurie",
            lastname: "eshleman"
        }

     //if user is in mongodb then 
  


    //     axios.post("http://localhost:8081/auth/login", authObj)
    //     .then(res => {
    //         console.log(res.data);
    //         setEmail(res.data.email);
    //         setPassword(res.data.password);
    //         setFirstName(res.data.firstname);
    //         setLastName(res.data.lastname);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

    // }

    //store user info in context
    return (
        <div>
            <h1>Login</h1>
            <button onClick={auth}>Authenticate</button>
        </div>
    )
}}
