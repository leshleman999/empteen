import React, { useState,useContext } from 'react';
import {SidebarData} from './SidebarData';
import {SidebarData2} from './SidebarData2';
import SidebarMenu from './SidebarMenu';
import logo from '../assets/EmpowerteenLogo.jpg';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { EmpTeenContext } from '../App'
import { EmpTeenUserEnvs } from '../App' 
import { EmpTeenCurEnv } from '../App' 
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios'

export default function Sidebar() {
    const history = useHistory();
    const [user, setUser] = useContext(EmpTeenContext)
    const [userEnvs, setUserEnvs] = useContext(EmpTeenUserEnvs)
    const [curEnv, setCurEnv] = useContext(EmpTeenCurEnv)
    const [feelings, setFeelings] = useState("");

    const editfeelings =(e)=>{
        console.log(e.target.value);
        setFeelings(e.target.value);
    }

    const deletefeelings = () =>{
        setFeelings('');
    }

    // user = {
    //     email: '',
    //     feelings: []
    // };
    const componentFeelings = () => {
        this.getBlogfeelings();
    }

    const getBlogfeelings = () => {
        axios.get('/api')
        .then((response) => {
            const data = response.data;
            this.setState({feelings: data});
            console.log('Data hasn been recieved!');
        })
        .catch(()=> {
            console.log('Data has bee recieved!');
            // alert('Error retrieving data!');
        });
    };
    
    const gotoHome = () => {
        console.log("should go to home")
    };

    return (
        <>
            <div className= "Sidebar">
                <div className="logo">
                    <img  onClick={gotoHome} style={{cursor:'pointer'}}
                        width={125} src={logo} alt=""/>
                </div>
                

                <div className="feeling">
                    <InsertEmoticonIcon style={{color:'#45aea8'}} fontSize="small"/>
                    <input className="feelinginput" size="25" type= "text" placeholder="How are you feeling today?" value={feelings} onChange={(editfeelings)}/>
                
                    <div className="row">
                    <HighlightOffIcon style={{cursor: 'pointer', color:'#7b6d6d'}} color="disabled" fontSize="small" onClick={deletefeelings}/>
                </div>
            </div>

                <div className="divider"></div>

                {SidebarData.map((item, index)=>{
                    return <SidebarMenu item={item} key={index}/>
                })}
            </div>
        </>
    );
}
