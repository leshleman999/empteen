import React, {useEffect} from 'react';
import axios from 'axios';
import '../css/manageEnvironments.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {Link} from 'react-router-dom';
import moment from 'moment'; 
import { useStateValue } from '../utils/StateProvider';  
  


export default function ManageEnvironments() {
    const [state, dispatch] = useStateValue()     
 

    useEffect(()=>{
        console.log('get axios result.data')
        
        axios.post('/getenvs')
        .then((result) => {
            dispatch({
                type: 'GET_ALL_ENVIRONMENTS', 
                payload: result.data,    //passing all environments
            });
            console.log("environments",result.data)
        })
        .catch((err) => {
            console.error("error",err);
            if(err.status === 400 || !err) {
                window.alert("Issue getting Environments");
            } 
        })

       

         
    },[]);
    
    // const handleAddEnvironment = () => {
    //     // setEnvAdd(true)
    // };

    // const handleDisplayEnvironment = (env) => {
    // //   setEnvEdit(true)
    // };

    // if(envAdd){
    if(false){
      return (
          <Link to="/environments/add" />
        //   )} else if (envEdit){
    )} else if (false){
        return(<Link to="/environments/edit" />)
        }
    else {
        console.log("return envs")
        return (
            <>
                <Header />
                <div className="home-content">
                    
                    {true ? <Sidebar2 /> : <Sidebar /> }
                    
                    <div className="manageEnvContent">
                        <div className="header">
                            <h1 className="adminTitle">Environments</h1>
                            <Link className="addEnv adminTitle" to="/environments/add"><AddCircleOutlineOutlinedIcon /></Link>
             
                        </div>
                        
                        <section className="envSearch">

                            <label style={{color:"#594F4E"}} className="envSearchLabel">Environment Search: </label>
                            <input className="field searchInput" type="text" placeholder="Enter search word(s) ..." />
                            
                            {/* {members.filter((val) => {
                                if(searchTerm === "") {
                                    return val;
                                } else if(
                                    val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
                                ){
                                    return val 
                                } */}

                                 <div className="envSearchList">
                                {
                                    state.allenvs.map(item => (
                                        
                                       
                                        <div className="envCard">    
                                            <Link style={{color:"#594F4E"}} className="envLink" key={item.envName} to={{ 
                                                    pathname: "/environments/edit",
                                                    aboutProps:{
                                                        envName: item.envName,
                                                        envDescription: item.envDescription,
                                                        envActive: item.envActive,
                                                        envDisplay: item.envDisplay,
                                                        envMembers: item.envMembers}
                                                    }} >
                                                    <img className="envImage" src={item.envImageURL} alt="environment" />
                                                    <h2 className="envTitle">{item.envName}</h2>
                                                    <p>{item.envDescription}</p>
                                                    <p className="timestamp">{moment(item.envCreateDate).fromNow()}</p>
                                                    <p>{item.envActive}</p>
                                                    <p>{item.envDisplay}</p>
                                            </Link>
                                        </div>
                                    ))
                                    
                            }
                        </div>

                            

                        </section>
                    </div>
                </div>
            </>
        )
    } 
}  
