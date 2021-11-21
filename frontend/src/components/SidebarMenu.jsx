import React, { useState,useEffect } from 'react';
import '../App.css';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useStateValue } from '../utils/StateProvider';

export default function SidebarMenu({item}) {
    const [state,dispatch] = useStateValue()
    console.log("Sidebar2 3")

    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    
    useEffect(()=>{
        // let general = state.userEnvs.filter((env) => env.envName === 'General')
        // dispatch({type: 'SET_INITIAL_GENERAL_ENVIRONMENT',payload: state.userEnvs.filter((env) => env.envName === 'General')})
        console.log("")
    },[])

    const handleEnvChange = (env) => {
        console.log("subnav item clicked",env)
        dispatch({type: 'SET_CURRENT_ENVIRONMENT', payload: env});
    }

    // console.log("filtered sb",state.userEnvs.filter(function(env) {return env.envName == 'General'}))
// console.log("filtered",[{n:1},{n:2},{n:3}].filter(function(number) {return number.n == 1}))
    // console.log("item.subNav",{item})
    return (
        <>       
            
            <div className="SidebarList" onClick={item.subNav && showSubnav}>
                <div>{item.icon}</div>
                <div className="title">{item.title}</div> 
                
            
                {
                item.subNav && subnav
                ? item.iconOpened 
                : item.subNav 
                ? item.iconClosed
                :null} 

            </div>   
                    
            {subnav && state.userEnvs.map((env, index)=>{
                console.log("result", item.title,env.envActive)
                if(item.title=="Current Environments" && env.envActive & env.envDisplay){
                    return( 
                        <div onClick={()=>handleEnvChange(env)} className="dropdownlist" key={index} >
                        
                            <div id="icon"><PeopleAltIcon/></div> 
                            <div id="title">{env.envName}</div> 
                        
                        </div> 
                    ) 
                } else if (item.title=="Past Environments" && !env.envActive & env.envDisplay){
                    return( 
                        <div onClick={()=>handleEnvChange(env)} className="dropdownlist" key={index} >
                        
                            <div id="icon"><PeopleAltIcon/></div> 
                            <div id="title">{env.envName}</div> 
                        
                        </div> 
                    ) 
                } else {
                    return <div></div>
                }
            })}

        
        </>
    )
}
//state.userEnvs[0].envObjectId.envName
//Object.keys(item).map(i => {Object.keys(item[i].map(field => {item[field]}))}