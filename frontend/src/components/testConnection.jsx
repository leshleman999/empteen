import React, {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import { EmpTeenContext } from '../App'
import { EmpTeenUserEnvs } from '../App' 
import { EmpTeenCurEnv } from '../App' 
    
export default function ManageEnvironments() {
            
    const [user, setUser] = useContext(EmpTeenContext)
    const [userEnvs, setUserEnvs] = useContext(EmpTeenUserEnvs)
    const [curEnv, setCurEnv] = useContext(EmpTeenCurEnv)
    const [test, setTest] = useState('')

    useEffect(()=>{
        
        axios.post('/testConnection',{field1:"test1"})
        .then((result) => {
            setUser(result.data)
            // console.log("test",result.data)
            
        })
        .catch((err) => {
            // console.error("error",err);
            if(err.status === 400 || !err) {
                window.alert("Issue getting test data");
            } 
        })
         
    },[]);
    
    console.log("test",test)
   if (test){
        return(<h1>{test.field1}</h1>)
        }
    else {
        return (<h1>No test data</h1>)
    } 
}  
