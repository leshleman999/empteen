import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from "styled-components";
import bgImg from '../assets/Signupic.png'
import Signup_Sidebar from './Signup_Sidebar';
import Signup_main from './Signup_main';
// import signpic from "../images/signup.svg";

export default function Signup() {
    const history = useHistory();
    const [user, setUser] = useState({
        email:"", password:"", cpassword:"" 
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value

        setUser({...user, [name]:value});
    }

     const PostData = async (e) => {
        e.preventDefault();

        const {email, password, cpassword} = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password, cpassword
               
            })
        });

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert ("Invalid Registration");
            console.log("Invalid Registration")
        } else {
            window.alert ("Registration Successful");
            console.log("Registration Successful");

            history.push("/");
        }
    }    

        return (
            
                <Container>
                    <Wrapper>
                        <Signup_Sidebar user={user} handleInputs={handleInputs} PostData={PostData}/>
                        <Signup_main />
                    </Wrapper>
                </Container>

        )
}

const Container = styled.div`
    background: #eefcff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

const Wrapper = styled.div`
    background-image: url(${bgImg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
`;

