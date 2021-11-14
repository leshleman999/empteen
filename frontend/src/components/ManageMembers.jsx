import React, {useEffect, useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Sidebar2 from './Sidebar2'
import WidgetSm from './WidgetSm'
import WidgetSmTwo from './WidgetSmTwo'
import WidgetSmThree from './WidgetSmThree'
import axios from 'axios'
import { useStateValue } from '../utils/StateProvider';

function ManageMembers() {
    const [state,dispatch] = useStateValue()
    const [searchTerm, setsearchTerm] =useState("");
    
   
    useEffect(() => {
        
            axios.post('http://localhost:5000/getMembers')
                .then(res => {
                    console.log("members", res.data);
                    //dispatch here
                })
                .catch((err) => {
                    console.log("error", err)
                })
        
    },[])


    return (
        
        <>
            <Header />
            
            <div className="home-content">
                {true ? <Sidebar2 /> : <Sidebar /> }
     
            <div className="members-content">
                <h1 class="adminTitle" >Manage Members</h1>
                <div className="widgetContainer">
                    <WidgetSm />
                    <WidgetSmTwo />
                    <WidgetSmThree />
                </div>                
                <input
                    type="text"
                    placeholder="Search for members..."
                    className="form-control"
                    style={{marginTop:50, marginBottom:20, width: "100"}} 
                    onChange={ (e) => {
                        setsearchTerm(e.target.value);
                        
                        
                    }}
                    />

                <div className="tableContainer">
                    <table className="table table-bordered">
                        <thead className="thead-dark" >
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {state.allusers.filter((val) => {
                                if(searchTerm === "") {
                                    return val;
                                } else if(
                                    val.first_name.includes(searchTerm.toLowerCase())
                                ){
                                    return val 
                                }
                                
                            }).map((m) => (
                                <tr key={m.id}>
                                    <td>{m.first_name}</td>
                                    <td>{m.last_name}</td>
                                    <td>{m.email}</td>
                        
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
                </div>
            </div>
        </>
    )
}
export default ManageMembers