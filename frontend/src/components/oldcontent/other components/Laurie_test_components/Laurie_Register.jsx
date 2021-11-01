import React, { useState,useEffect } from 'react';
import axios from 'axios'
import '../App.css';
import ToggleButton from './globalComponents/ToggleButton'

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [active, setActive] = useState('');
    const [parentGuardianName, setParentGuardianName] = useState('');
    const [parentGuardianEmail, setParentGuardianEmail] = useState('');
    const [parentGuardianFullName, setParentGuadianFullName] = useState('');

    useEffect(() => {
        //assign entryStatus class to all fields and fed auth icons (except first and last names)
        //set the entryStatus class to disabled
        //on change of first and last, if both are filled in, set entryStatus class to enabled
    })

    const auth = () =>{
        
        const authObj = {
            email: "tanner",
            password: "baseball",
            firstname: "tanner",
            lastname: "cottle",
            active: false,
        }

        //console.log("authObj",authObj)

        // axios.post("http://localhost:8081/auth/register", authObj)
        // .then(res => {
        //     console.log(res.data);
        //     setEmail(res.data.email);
        //     setPassword(res.data.password);
        //     setFirstName(res.data.firstname);
        //     setLastName(res.data.lastname);
        //     setParentGuardianName(res.data.parentGuardianName);
        //     setParentGuardianEmail(res.data.parentGuardianEmail);
        //     setParentGuadianFullName(res.data.parentGuardianFullName);              
        // })
        // .catch(err => {
        //     console.error(err);
        // });

    }

    function checkFirstLast(){
        let fname = document.getElementById('firstname');
        let lname = document.getElementById('lastname');
        let entryStatus = document.getElementsByClassName('entryStatus');
        if (fname.innerText & lname.innerText){
            entryStatus.setAttribute("enabled",false)
        } else {
            entryStatus.setAttribute("disabled",true)
        }
    }


    return (
        <div className="content">
            <img id="logo" src="/public/assets/Empowerteen Logo-05.jpg" />
            
            <div className="register">
                <img src="https://www.empowerteen.org/wp-content/uploads/2018/03/bigstock-High-School-Students-Taking-Pa-66792271.jpg" alt="" className="bgPicture" />
                <div className="loginBox">
                    <div className="name">
                        <div className="name-first">
                            <p className="fieldLabel">First Name</p>
                            <input onChange={checkFirstLast} className="field" id="firstname" placeholder="First Name" />   
                        </div>    
                        <div className="name-last">    
                            <p className="fieldLabel">Last Name</p>   
                            <input className="field" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="underage">
                        <div className="toggle-section">
                            <p className="fieldLabel">Under 18 years of age?</p>
                            <ToggleButton id="togglebutton"/>
                        </div>

                        <p className="fieldLabel entryStatusLabel">Parent / Guardian Full Name</p>
                        <input disabled="disabled" className="field entryStatus" id="pgName" placeholder="Parent/Guardian Name" />
                        
                        <p className="fieldLabel entryStatusLabel">Parent or Guardian Email</p>
                        <input disabled="disabled" className="field entryStatus" id="pgEmail" placeholder="Parent/Guardian Email" />

                    </div>
                    <hr size="1" />
                    <div className="emailSignup">
                        <div>
                            <p className="fieldLabel entryStatusLabel">Email</p>
                            <input disabled="disabled" className="field entryStatus" id="email" placeholder="Your email ID" />
                        </div>
                        <div>
                            <p className="fieldLabel entryStatusLabel">Create Password</p>
                            <input disabled="disabled" className="field entryStatus" id="createEmail" placeholder="Create Email" />
                        </div>
                        <div>
                            <p className="fieldLabel entryStatusLabel">Confirm Password</p>
                            <input disabled="disabled" className="field entryStatus" id="confirmEmail" placeholder="Confirm Email" />
                        </div>                        
                    </div>
                    <div id="or" >OR</div>
                    <div className="fedAuth">
                        <img disabled="disabled" className="fedAuthIcon entryStatus" id="google" src="https://developers.google.com/identity/images/g-logo.png" />
                        <img disabled="disabled" className="fedAuthIcon entryStatus" id="facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_(2019).png/1200px-Facebook_Logo_(2019).png" />
                        <img disabled="disabled" className="fedAuthIcon entryStatus" id="instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" />
                        <img disabled="disabled" className="fedAuthIcon entryStatus" id="twitter" src="http://pluspng.com/img-png/twitter-png-logo-twitterbird-1528.png" />
                    </div>
                </div>
            </div>
            <button onClick={auth}>Authenticate</button>
        </div>
    )
}



