import React, { useState,useContext } from 'react';
import '../App.css';
import { EmpTeenContext } from '../App'
import { EmpTeenUserEnvs } from '../App'
import { EmpTeenCurEnv } from '../App' 
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


export default function SidebarMenu({item}) {
    const [user, setUser] = useContext(EmpTeenContext)
    const [userEnvs, setUserEnvs] = useContext(EmpTeenUserEnvs)
    const [curEnv, setCurEnv] = useContext(EmpTeenCurEnv)

    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>       
            
                <div className="SidebarList" onClick={item.subNav &&
                showSubnav}>
                <div>{item.icon}</div>
                <div className="title">{item.title}</div> 
                
                
                {item.subNav && subnav
                ? item.iconOpened 
                : item.subNav 
                ? item.iconClosed
                :null} 

                </div>   


                    {subnav && userEnvs.map((item, index)=>{

                    return( 
                            <div onClick={(item)=>setCurEnv(item)} className="dropdownlist" key={index}>
    
                            <div id="icon"><PeopleAltIcon/></div> 
                            <div id="title">{item.envName}</div> 
                            
                            </div> 
                        )  
                    })}   

        
        </>
    )
}
