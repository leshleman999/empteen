import React  from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
import styled from "styled-components";
import bgImg2 from '../assets/Loginpic.png'
import Login_Sidebar from './Login_Sidebar';
import Login_main from './Login_main';


export default function Login() {
    
    return (
        <Container>
        <Wrapper>
            <Login_Sidebar />
            <Login_main />
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
    background-image: url(${bgImg2});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
`;



