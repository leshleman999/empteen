import React, { useContext, useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { EmpTeenContext } from '../App';
import { EmpTeenUserEnvs } from '../App';
import { EmpTeenCurEnv } from '../App';

export default function SidebarCurrentEnv({item}) {
    const [user, setUser] = useContext(EmpTeenContext);
    const [userEnvs, setUserEnvs] = useContext(EmpTeenUserEnvs);
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    const [curEnv, setCurEnv] = useContext(EmpTeenCurEnv);

    return (
        <>       
            
                <Link className="SidebarList" to={item.link} onClick={item.subNav &&
                showSubnav}>
                <div>{item.icon}</div>
                <div className="title">{item.title}</div> 
                
                
                {item.subNav && subnav
                ? item.iconOpened 
                : item.subNav 
                ? item.iconClosed
                :null} 
           
           </Link>   
                {/* {subnav && userEnvs.filter(envActive=>envActive= true).map((item, index)=>{
                  return( 
                      <Link className="dropdownlist" to={item.link} key={index}>

                        <div id="icon">{item.icon}</div> 
                        <div id="title">{item.envObjectId.envName}</div> 
                      
                       </Link> 
                  )  
                })} */}
        {/* filter({envActive: true}) */}
                  {subnav && userEnvs.map((item, index)=>{
                  return( 
                      <Link onClick= {setCurEnv(item.envObjectId)} className="dropdownlist" to={item.link} key={index}>

                        <div id="icon">{item.icon}</div> 
                        <div id="title">{item.envObjectId.envName}</div> 
                      
                       </Link> 
                  )  
                })}
        
        </>
    )
}
