import React, {useState,useContext,useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/logo1.png';
import Input from './Login_Input';
import { EmpTeenContext } from '../App';
import axios from 'axios';



const Login_Sidebar = () => {
    const [user, setUser] = useContext(EmpTeenContext)
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    useEffect(()=>{
        // setEmail(email);
        // setPassword(password);
        console.log("2",user)
    },[])

    const loginUser = async (e) => {
        console.log("3",user)
        e.preventDefault();
        // console.log("email",email,"password",password)
        
        axios.post('http://localhost:5000/signin',{email:email,password:password})
        .then((result) => {
            // console.log("user",result.data)
            setUser(result.data)
            console.log("4",email,password)
            console.log("4",user)

            
        })
        .catch((err) => {
            console.error("4-error",err);
            if(err.status === 400 || !err) {
                window.alert("Issue getting user");
            } 
        })
        // const res = await fetch('http://localhost:5000/signin', {
        //     method:"POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password
        //     })
        // });

        // console.log("hello2")
        // const data = res.json();
        // console.log("hello3")
        // console.log("data",data.promiseResult)


        // if(res.status === 400 || !user) {
        if(!user && user.email != "xxx") {
            // if(false || !user) {
                window.alert("Invalid Credentials");

        } else {
            // console.log(user)
            // console.log("email",email,"password",password)
            window.alert("Login Successful")
            console.log("5",user)
            history.push("/home");
        }
        
    }
    console.log("1",user)
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt=" " />
            </LogoWrapper>
            <Form >
                <h3>Login</h3>
                <input name="email" id="email" type="text" placeholder="Email ID" value={email} onChange = {(e) => setEmail(e.target.value)} />
                <input name="password" id="password"  type="password" placeholder="Your Password" value={password} onChange = {(e) => setPassword(e.target.value)} />
                <button name="signin" id="signin" value="Log In" onClick={loginUser}> Log In   </button>
            </Form>
            <div>
                
                <NavLink to="/signup" className="signup-image-link"> Need an account?  Sign Up!</NavLink>
                
            </div>
        </Container>
    );
};


const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }

    button {
        width: 75%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #70edb9;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;

         &:hover {
            transform: translateY(-3px);
    }
    }
`

const LogoWrapper = styled.div`
    img{
        height: 6rem;
    }

    h3
`

const Container = styled.div`
    min-width: 400px;
    backdrop-filter: blur(35px);
    background-color: rgb(255, 255, 255, 0.8);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;

    @media (max-width: 900px) {
        width: 100vw;
        position: absolute;
        padding: 0;
    }
    NavLink {
        color: #808080;
        font-weight: absolute;
        padding: 0;
        margin-top: 2rem;

        span {
            color: #ff8d8d;
            cursor: pointer;
        }
    }
`;

export default Login_Sidebar;