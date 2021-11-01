import React, { useState, useContext } from 'react';
import '../css/Settings.css';
import ProfilePicture from './ProfilePicture';
import Header from './Header';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import SaveSharpIcon from '@mui/icons-material/SaveSharp';
import Sidebar from './Sidebar';
import Confirmation from './Confirmation';
import { EmpTeenContext } from '../App'



function Settings() {
    const [user, setUser] = useContext(EmpTeenContext)
    const [adminMember, setAdminMember] = useState(user.isAdmin);
    
    const [displayName, setDisplayName] = useState(user.displayname);
    const [firstName, setFirstName] = useState(user.firstname);
    const [lastName, setLastName] = useState(user.lastname);
    const [email, setEmailName] = useState(user.email);
    const [gardianName, setGardianName] = useState(user.guardianname);
    const [gardianEmail, setGardianEmail] = useState(user.guardianemail);
    const [locationCity, setLocationCity] = useState(user.city);
    const [locationState, setLocationState] = useState(user.state);
    const [locationCountry, setLocationCountry] = useState(user.country);
    const [phoneNumber, setPhoneNumber] = useState(user.phonenumber);
    const [birthday, setBirthDay] = useState(user.birthday);
    const [timeZone, setTimeZone] = useState(user.timezone);
    
    const [currentPassword, setCurrentPasword] = useState(user.timezone);
    const [newPassword, setNewPasword] = useState();
    const [comfirmPassword, setComfirmPasword] = useState();
    const [prounouns, setPronouns] = useState(user.pronouns);
    const [aboutMe, setAboutMe] = useState(user.aboutme);

    const isAdmin = (e)=>{
        setAdminMember(e.target.value)
        (user.isAdmin == 'true') ? console.log(`${user} is admin`) : console.log(`${user} is "NOT" admin`)       
    }
    

    const inputDisplayHandler = (e)=>{
        setDisplayName(e.target.value);
    }
    const inputFNameHandler = (e)=>{
        setFirstName(e.target.value);
    }
    const inputLNameHandler = (e)=>{
        setLastName(e.target.value);
    }
    const inputEmailHandler = (e)=>{
        setEmailName(e.target.value);
    }
    const inputGardianNameHandler = (e)=>{
        setGardianName(e.target.value);
    }
    const inputGardianEmailHandler = (e)=>{
        setGardianEmail(e.target.value);
    }
    const inputCityHandler = (e)=>{
        setLocationCity(e.target.value)
    }
    const inputStateHandler = (e)=>{
        setLocationState(e.target.value)
    }
    const inputCountryHandler = (e)=>{
        setLocationCountry(e.target.value)
    }

    const inputPhoneHandler = (e)=>{
        setPhoneNumber(e.target.value)
    }
    const inputBirthDateHandler = (e)=>{
        setBirthDay(e.target.value)
    }
    const inputTimeZoneHandler = (e)=>{
        setTimeZone(e.target.value)
    }
    
    const inputPronounsHandler = (e)=>{
        setPronouns(e.target.value);
    }
    const inputAboutMeHandler = (e)=>{
        setAboutMe(e.target.value)
    }

    const inputConfirmHandler = (e)=>{
       setAdminMember(e.target.value)
    }

    return (
    
            <div className='settingsContainer'>
                        <Header />
                <div className='contain'>
                    <Sidebar />
                    <div className='settings'>
                        <div className='profileSettings'>
                            <div className='profileTitle'>
                                <ArrowBackSharpIcon fontSize="large" />
                                <h3>Profile Settings</h3>
                                <p>Change your basic profile information</p>
                            </div>
                            <div className='profileInputs'>
                                <div className='inputFirstRow'>
                                    <div className='inputsField'>
                                        <div className='displayName'>
                                            <label>Display Name <span>*</span></label>
                                            <input type='text' placeholder='Display Name' value={displayName} onChange={inputDisplayHandler}/>
                                        </div>
                                        <div className='name'>
                                            <div className='firstLastName'>
                                                <label>First Name <span>*</span></label> 
                                                <input type='text' placeholder='First Name' value={firstName} onChange={inputFNameHandler}/>
                                            </div>
                                            <div className='lasttLastName'>
                                                <label>Last Name <span>*</span></label> 
                                                <input type='text' placeholder='Last Name' value={lastName} onChange={inputLNameHandler}/>
                                            </div>
                                        </div>
                                        <div className='email'>
                                            <label>Email <span>*</span></label>
                                            <input type='text' placeholder='name@email.com' value={email} onChange={inputEmailHandler}/>
                                        </div>
                                    </div>

                                    <div className='profile'>
                                        <div className='profilePic'>
                                            <ProfilePicture />
                                        </div>
                                        <button className='UploadImg'><p>Upload Image</p></button>
                                        <button className='RemoveImg'><p>Remove Image</p></button>
                                    </div>
                                </div>

                                <div className='inputSecondRow'>
                                        <div className='parentsInfo'>
                                            <div className='parentName'>
                                                <label>Parent/ Gardian Full Name <span>*</span></label> 
                                                <input type='text' placeholder='Parent/ Gardian Full Name' value={gardianName} onChange={inputGardianNameHandler}/>
                                            </div>
                                            <div className='parentsEmail'>
                                                <label>Parent/ Gardian Email <span>*</span></label> 
                                                <input type='text' placeholder='Parent/ Gardian Email' value={gardianEmail} onChange={inputGardianEmailHandler}/>
                                            </div>
                                        </div>
                                        <div className='location'>
                                            <div className='locationSpot'>
                                                <label>Location</label> 
                                                <div className='locationCityandState'>
                                                    <input type='text' placeholder='city' value={locationCity} onChange={inputCityHandler} />
                                                    <input type='text' placeholder='state' value={locationState} onChange={inputStateHandler} />
                                                </div>
                                            </div>
                                            <div className='locationCountry'>
                                                <input type='text' placeholder='country' value={locationCountry} onChange={inputCountryHandler} />
                                            </div>
                                        </div>
                                        
                                        <div className='numberContainer' >
                                        {/* <div className='numberandBirth' > */}

                                            <div className='confirmation' >
                                               
                                                { adminMember ? <Confirmation /> : null }
                                                
                                            </div>

                                             <div className='numberandBirth'>
                                                 <div className='phoneNumber'>
                                                     <label>Phone # <span>*</span></label>
                                                     <input type='text' placeholder='(123)456-7890' value={phoneNumber} onChange={inputPhoneHandler}  />
                                                 </div>
                                                 <div className='dateOfBirth'>
                                                     <label>Birth Date <span>*</span></label>
                                                     <input type='text' placeholder='12/15/1982' value={birthday} onChange={inputBirthDateHandler} />
                                                 </div>
                                             </div>

                                         </div>
                                         <div className='timeoutandZone'>
                                             <div className='timeOut'>

                                                 {/* { adminMember ? <Timeout /> : null } */}

                                             </div>
                                             {/* <div className='confirmation' >
                                               
                                                { adminMember ? <Confirmation /> : null }
                                               
                                           </div> */}
                                             <div className='timeZone'>
                                                 <label>Time Zone <span>*</span></label>
                                                 <input type='text' placeholder='Pacific/ Mountain/ Central/ Eastern Time' value={timeZone} onChange={inputTimeZoneHandler} />
                                             </div>
                                         </div>
                                 </div>
                             </div>
                         </div>

       <div className='passwordSettings'>

           <div className ='passwordTitle'>
               <h3>Change Password</h3>
               <p>Change your password</p>
               <p>Leave this blank to keep</p>
               <p>your current password.</p>
           </div>
           <div className='passwordInput'>
               <div className='passwordInfo'>
                   <div className='currentPassWord'>
                       <label>Current Password</label> 
                       <input type='text' placeholder='Current Password'/>
                   </div>
                   <div className='newPassWord'>
                       <label>New Password</label> 
                       <input type='text' placeholder='New Password'/>
                   </div>
                   <div className='comfirmPassWord'>
                       <label>Comfirm PassWord</label>
                       <input type='text' placeholder='Comfirm PassWord'/>
                   </div>
               </div>
           </div>
       </div>
                            
       <div className='socialSettings'>
           <div className ='socialTitle'>
               <h3>Social Settings</h3>

           </div>
                            
           <div className='aboutInfo'>
               <div className='pronouns'>
                   <label>Pronouns</label> 
                   <input type='text' placeholder='Enter your Pronouns' value={prounouns} onChange={inputPronounsHandler}/>
                   <p>What pronouns would you prefer are used when addressing you?  This information will not be shared wiht your parent/guardian.</p>
               </div>
               <div className='aboutText'>
                   <label>About Me</label> 
                   <p>** 150 character max **</p>
                   <textarea placeholder='What would you like to share with members of the empowerteen community?'value={aboutMe} onChange={inputAboutMeHandler}></textarea>
               </div>
               <div>
                   <div className='settingBtns'>
                       <ClearSharpIcon fontSize="large" />   
                       <SaveSharpIcon  fontSize="large" /> 
                   </div>
               </div>
           </div>
       </div>
                     </div>
                 </div>
             </div>
      
     )
}

export default Settings
