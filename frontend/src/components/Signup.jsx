import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
// import signpic from "../images/signup.svg";

export default function Signup() {
    const history = useHistory();
    const [user, setUser] = useState({
        email:"", password:"", cpassword:"" 
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {email, password, cpassword} = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password, cpassword
               
            })
        });

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert ("Invalid Registration");
            console.log("Invalid Registration")
        } else {
            window.alert ("Registration Successful");
            console.log("Registration Successful");

            history.push("/settings");
        }
    }    

        return (
            <>
                <section className="signup">
                    <div className="container mt-5">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title"> Sign up</h2>
                                <form method="POST" className="register-form" id="register-form"> 
                                
                                        <div className="form-group">
                                            <input type="text" name="email" id="email" autoComplete="off"
                                                value={user.email}
                                                onChange={handleInputs}
                                                placeholder="Your Email"
                                            />
                                        </div>
    
                                        <div className="form-group">
                                            <input type="password" name="password" id="password" autoComplete="off"
                                                value={user.password}
                                                onChange={handleInputs}
                                                placeholder="Your Password"
                                            />
                                        </div>
    
                                        <div className="form-group">
                                            <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                                value={user.cpassword}
                                                onChange={handleInputs}
                                                placeholder="Your Confirm Password"
                                            />
                                        </div>
    
                                        <div className="form-group form-button">
                                                <input type="submit" name="signup" id="signup" className="form-submit"
                                                    value="register" onClick={PostData}/>
                                        </div>
    
                                </form>
                            </div>
    
                                <div className="signup-image">
                                        <figure>
                                                <img src="" alt="registration pic" />
                                        </figure>
                                        <NavLink to="/" className="signup-image-link"> I am already registered</NavLink>
                                </div>
    
                            
                        </div>
                    </div>
                </section>
            </>
        )

}

