//use axios in LoginSidebar.jsx
export const user = {
    email:'',
    password: '',
    displayname: 'dena', 
    firstname: '',
    lastname: '',
    image:'',
    isAdmin: false,
    isLoggedIn: false,
    environments: [],
}

//use axios in home.jsx
export const curEnv = {}

// {"_id":{"$oid":"615dec9e4fddecc244781176"},"envName":"General","envDescription":"DONT TOUCH","envImageURL":"https://i.ytimg.com/vi/ehIIXOS9tq4/maxresdefault.jpg","envActive":true,"envDisplay":true,"envCreateDate":{"$date":{"$numberLong":"1633545374931"}},"envAnnouncements":[{"annTitle":"Welcome to the EmpowerTeen General Environment","annContent":"This is where you ...","annDate":{"$date":{"$numberLong":"1634108400000"}}},{"annTitle":"Winter EmpowerTenn Camp","annContent":"This camp is ...","annDate":"10/13/2021"}],"__v":{"$numberInt":"0"},"envTeacher":{"$oid":"61673d7e57f41a98d297a983"}}

//use axios to get the user's environments in home.jsx
export const userEnvs = [{}]


export const allenvs=[{}]

//use axios in ManageMembers.jsx
export const allusers=[{}]

export const envTopics=[{}]

// Dispatched actions
const reducer = (state,action) => {
    
    // console.log("action.payload",action.payload)

    switch(action.type) {

        case "LOGIN_SUCCESS":
            return {
                ...state, 
                user : action.payload,

            }


        case "LOGIN_FAILURE":
            return {
                // ...state.user.isLoggedIn = false,
            }

        case "GET_USER_ENVIRONMENTS":
            let result=action.payload.filter(function(env) {return env.envName == 'General'})             
            return {
                ...state,
                userEnvs: action.payload,  
                curEnv: result[0],
            }

        case 'SET_INITIAL_GENERAL_ENVIRONMENT':
            return {
                
                ...state,
                curEnv: action.payload.filter(function(env) {return env.envName === 'General'})          
            }


            case "ADD_NEW_ENVIRONMENT":
            return {

            }
        case "EDIT_ENVIRONMENT":
            return {

            }
        case "ARCHIVE_ENVIRONMENT":
            return { 
                
            }
        case "SET_CURRENT_ENVIRONMENT":
            return {
                ...state, 
                curEnv: action.payload  
            }

        default:
            return state;
    }
}

export default reducer;