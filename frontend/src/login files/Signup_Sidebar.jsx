import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/logo1.png'
import Input from './Signup_Input';




const Signup_Sidebar = ({user, handleInputs, PostData}) => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt=" " />
            </LogoWrapper>
            <Form >
                <h3>Sign Up</h3>
                <Input name="email" id="email" type="text" placeholder="Email ID" value={user.email}  onChange={handleInputs} />
                <Input name="password" id="password"  type="password" placeholder="Create Password" value={user.password} onChange={handleInputs} />
                <Input name="cpassword" id="cpassword"  type="password" placeholder="Confirm Password" value={user.cpassword}  onChange={handleInputs} />
                <button name="signup" id="signup" value="Sign Up" onClick={PostData}> Sign Up   </button>
            </Form>
            <div>
                <Terms>
                    By signing up, I agree to the Privacy Policy <br/> and Terms of Service
                </Terms>
                
                    <NavLink to="/" className="signup-image-link">
                         Already have an account <span>Sign In</span>
                    </NavLink>
                
            </div>
        </Container>
    );
};

const Terms = styled.p`
    padding: 0 1rem;
    text-align: center;
    font-size: 10px;
    color: #808080;
    font-weight: 300;

`

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

export default Signup_Sidebar;
