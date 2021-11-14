import React, { useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { useStateValue } from '../utils/StateProvider';

export default function SidebarCurrentEnv({item}) {
  const [state, dispatch] = useStateValue()    
    
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    const dispatch_curEnv = () => {
      //dispatch here
    }

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
                  {subnav && state.userEnvs.map((item, index)=>{
                  return( 
                    // <Link onClick= {setCurEnv(item._id)} className="dropdownlist" to={item.link} key={index}></Link>
                      <Link onClick= {dispatch_curEnv} className="dropdownlist" to={item.link} key={index}>

                        <div id="icon">{item.icon}</div> 
                        <div id="title">{item.title}</div> 
                      
                       </Link> 
                  )  
                })}
        
        </>
    )
}
