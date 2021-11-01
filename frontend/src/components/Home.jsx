import React, { useContext,useEffect,useState} from 'react'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
import Sidebar2 from './Sidebar2'
import { EmpTeenContext } from '../App'
import { EmpTeenUserEnvs } from '../App'
import { EmpTeenCurEnv } from '../App' 
import axios from 'axios'
import { getNativeSelectUtilityClasses } from '@mui/material'





export default function Home() {
    
    const [user, setUser] = useContext(EmpTeenContext)
    const [userEnvs, setUserEnvs] = useContext(EmpTeenUserEnvs)
    const [curEnv, setCurEnv] = useContext(EmpTeenCurEnv)
    const [isLoading,setLoading]=useState(true)
    const [getData,setGetData]=useState(getNativeSelectUtilityClasses)
    const [adminsidebar, setAdminSidebar] = useState(false);

    


    
    // useEffect(()=>{
        console.log("6",user)
        if(!curEnv) {

            axios.post('/get-general',{envName: "General"})
            .then((result) => {
                setCurEnv(result.data)
            })
            .catch((err) => {
                console.error("error",err);
                if(err.status === 400 || !err) {
                    window.alert("Issue getting current environment");
                } 
            })
        }
        
        axios.post('/getuserenvs',user)
        .then((result) => {
            setUserEnvs(result.data)
        })
        .catch((err) => {
            if(err.status === 400 || !err) {
                window.alert("Issue getting user Environments");
            } 
        })

    // },[])

    
    console.log("7",user)

    
    return (
        <div>
            <Header />
            <div className="home-content">

                 {false ? <Sidebar2 /> : <Sidebar /> }
               
                <Main />
            </div>
        </div>
    )
} 
