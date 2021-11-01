import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {useState, useEffect} from 'react';
import axios from 'axios'


function ManageMembers() {


    const [searchTerm, setsearchTerm] =useState("");
    const [members, setMembers] = useState([])
    
   

useEffect(() => {
    
        axios.post('http://localhost:5000/users')
            .then(res => {
                console.log("members", members);
                setMembers(res.data) ;
                
            })
            .catch((err) => {
                console.log("error", err)
            })
    
},[])






    return (
        
        <>
            <Header />
            <div className="home-content">
                <Sidebar />
                <div className="members-content">
                <h1 class="text-center" >MANAGE MEMBERS </h1>
                <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    style={{marginTop:50, marginBottom:20, width: "80%"}} 
                    // onChange={ (e) => {
                    //     setsearchTerm(e.target.value);
                        
                        
                    // }}
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
                            {members.filter((val) => {
                                if(searchTerm === "") {
                                    return val;
                                } else if(
                                    val.first_name.includes(searchTerm.toLowerCase())
                                ){
                                    return val 
                                }
                                
                            }).map((m) => (
                                <tr key={m.id}>
                                    <td>{m.firstname}</td>
                                    <td>{m.lastname}</td>
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
