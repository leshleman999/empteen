import React, { useState,useContext } from 'react';
import {SidebarData2} from './SidebarData2';
import SidebarMenu from './SidebarMenu';
import logo from '../assets/EmpowerteenLogo.jpg';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { EmpTeenContext } from '../App'
import { EmpTeenUserEnvs } from '../App' 
import { EmpTeenCurEnv } from '../App' 
import { NavLink, useHistory } from 'react-router-dom';


export default function Sidebar2() {
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

    const gotoHome = () =>{
        history.push("/home");;
    }

    return (
        <>
            <div className= "Sidebar">
                <div className="logo">
                    <img onClick={gotoHome} style={{cursor:'pointer'}}
                            width={125} src={logo} alt=""/> 
                </div>
    ​
                <div className="feeling">
                    <InsertEmoticonIcon style={{color:'#45aea8'}} fontSize="small"/> 
                    <input className="feelinginput" size="25" type= "text" placeholder="How are you feeling today?" value={feelings} onChange={(editfeelings)}/> 
                
                    <div className="row">
                        <HighlightOffIcon style={{cursor: 'pointer', color:'#7b6d6d'}} color="disabled" fontSize="small" onClick={deletefeelings}/> 
                    </div>
                </div>

            <div className="divider"> </div>
                
                {SidebarData2.map((item, index)=>{
                    return <SidebarMenu id="env" item={item} key={index}/>
                })}
           </div>
        </>
    )
}
