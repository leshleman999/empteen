import React, { useEffect} from 'react'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
import Sidebar2 from './Sidebar2'
import axios from 'axios'
import { useStateValue } from '../utils/StateProvider';
// import { getNativeSelectUtilityClasses } from '@mui/material'
// const [getData,setGetData]=useState(getNativeSelectUtilityClasses)
// const [adminsidebar, setAdminSidebar] = useState(false);


export default function Home() {
    const [state,dispatch] = useStateValue()

    console.log("Home 1")

    useEffect(()=>{
        console.log("Home 4 running useEffect")

        axios.post('http://localhost:5000/env/getuserenvs',{email: state.user.email})
        .then((result) => {
    
            dispatch({
                type: 'GET_USER_ENVIRONMENTS', 
                payload: result.data    //passing the user object
            });
            console.log("Home state.userEnvs",result.data)

            console.log("Home state.curEnv",state.curEnv)
    
        })
        .catch(err =>
            console.log("error",err)
            // dispatch({type: 'LOGIN_FAILURE', payload: result.data});
        
        )

        // if(!state.curEnvs) {
            // }
            
            
            // console.log("filtered",state.userEnvs)
            // console.log("filtered",[{n:1},{n:2},{n:3}].filter(function(number) {return number.n == 1}))
            // console.log("general",state.curEnv)
            // (state.curEnv) 
            // ?
            //     dispatch({type: 'SET_GENERAL_ENVIRONMENT', payload: item})
            // :
            //     dispatch({type: 'SET_CURRENT_ENVIRONMENT', payload: item});
            
        },[])
        

    // function getGeneralEnv(envs)) {
        // return envs
        //   .filter(function(obj) {
            // return obj.envName == 'General';
        //   })
        //   .map(function(obj) {
        //     return obj.message;
        //   });
    //   }


    // console.log("sending user email", state.user.email)

    console.log("Home 2")

    
    return (
        <div>
            <Header />
            <div className="home-content">

                 {state.user.isAdmin ? <Sidebar2 /> : <Sidebar /> }
               
                <Main />
            </div>
        </div>
    )
} 
