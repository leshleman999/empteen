import React, { useContext} from 'react'
import styled from "styled-components";
import { EmpTeenContext } from '../App'

const Login_main = () => {
    const [user, setUser] = useContext(EmpTeenContext)
    return (
        <Container>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Login_main;