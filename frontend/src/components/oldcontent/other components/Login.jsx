import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import Home from '../Home'
// import { CurrentUser } from '../CurrentUser';
// import { CurrentEnv } from '../CurrentEnv'
// import { CurrentEnvironments } from '../CurrentEnvironments'

export default function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [xemail, setXEmail] = useState('');
    const [xpassword, setXPassword] = useState('');
    
    // const currentUser = useContext(CurrentUser);
    // let currentEnv = useContext(CurrentEnv);
    // let currentEnvironments = useContext(CurrentEnvironments);
    
    const authObj = {
        email: email,
        password: password,
    }

    axios.post("http://localhost:8081/auth/login", authObj)
    .then(res => {
        // currentUser = res.data

    })
    .catch(err => {
        console.error(err);
    });


    const auth = () => {
        // currentUser = {email: 'Lilia',image:"https://data.whicdn.com/images/322027365/original.jpg?t=1541703413",firstname: "Lil"}
        // console.log(currentUser)            
        
        // currentEnvironments =
        //     [
        //         {envName: "e1",envDescription:"desc1"},
        //         {envName: "e2",envDescription:"desc2"},
        //         {envName: "e3",envDescription:"desc3"}
        //     ]
        
                
        // currentEnv = {envName: "e3",envDescription:"desc3"}


     

    if(true){
        console.log("yes")
    } else {console.log("no")}

    }

    if (true){
        console.log(true)
        return (
            // <CurrentUser.Provider value={currentUser}>
                // <CurrentEnvironments.Provider value={currentEnvironments}>
                    // <CurrentEnv.Provider value={currentEnv}> 
                        <Home /> 
            //         </CurrentEnv.Provider>
            //     </CurrentEnvironments.Provider>
            // </CurrentUser.Provider>
        )

    } else {
        console.log(false)
        return (
            <div>
                <h1>Login</h1>
                <div className="emailLogin">
                    <div>
                        <p className="fieldLabel entryStatusLabel">Email</p>
                        <input className="field entryStatus" id="email" 
                        placeholder="Your email ID" 
                        // onChange={(e)=>setXEmail(e.target.value)} 
                        />
                    </div>
                    <div>
                        <p className="fieldLabel entryStatusLabel"> Password</p>
                        <input className="field entryStatus" id="password" 
                        placeholder="Password" 
                        // onChange={(e)=>setXPassword(e.target.value)}
                        />
                    </div>                      
                </div>
                <button onClick={auth}>Authenticate</button>
            </div>
        )
    }
        
}
