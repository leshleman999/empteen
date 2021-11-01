import React,{useState} from 'react'
// import EditForm from './manageEnv/useForm'
// import validateInfo from './manageEnv/validateInfo'
// import ToggleButton from '../globalComponents/ToggleButton'
import '../css/manageEnvironments.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const EnvEdit = (props) => {
    // const {envName,envDescription} = EditForm(value)
    // const {values,handleChange,handleSubmit,errors} = EditForm(validateInfo,submitForm)
    // const [isActive, setIsActive] = useState(false);
    // const [isDisplayed, setIsDisplayed] = useState(false);
    // const { value } = useParams()
    console.log("props",props.location.aboutProps.envMembers)
    
    const [state, setState] = useState({
        envName: props.location.aboutProps.envName,
        envDescription: props.location.aboutProps.envDescription,
        envActive: props.location.aboutProps.envActive,
        envDisplay: props.location.aboutProps.envDisplay,
        envMembers: props.location.aboutProps.envMembers
      });

    const [editEnv, setEditEnv] = useState([]);

    const handleChange = e => {
        const { name,value} = e.target
        setState((state) => ({...state,[name]: value}));
    }

        function handleSubmit(e) {
            e.preventDefault();
            setEditEnv((preEnv) => [...preEnv, state]);
          }

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <div className="manageEnvContent">
                    <h1 className="adminTitle">Environments</h1>
                    <section className="envForm"> 
                        <div className="leftside">         
                            <div>arrow</div>                
                            <h1>Display an environment</h1>
                            <div className="form-inputs">
                                <label htmlFor="envName" className="form-label fieldLabel">
                                    Environment Name
                                </label>
                                <input 
                                    id="envName" 
                                    type="text" 
                                    name="envName" 
                                    value={state.envName}
                                    className="form-control"
                                    onChange={handleChange}
                                />
                                {/* {errors.envName && <p>{errors.envName}</p>} */}
                            </div>

                            <div className="form-inputs">
                                <label htmlFor="envDescription" className="form-label fieldLabel">
                                    Description
                                </label>
                                <input 
                                    id="envDescription" 
                                    type="text" 
                                    name="envDescription" 
                                    className="form-control"
                                    value={state.envDescription}
                                    onChange={handleChange}
                                />
                                {/* {errors.envDescription && <p>{errors.envDescription}</p>} */}
                            </div>

                            <div className="form-inputs">
                                <label htmlFor="envActive" className="form-label fieldLabel">
                                    Active
                                </label>
                                <input 
                                    id="envDescription" 
                                    type="boolean" 
                                    name="envActive" 
                                    className="form-control"
                                    value={state.envActive}
                                    onChange={handleChange}
                                />
                                {/* {errors.envDescription && <p>{errors.envDescription}</p>} */}
                            </div>  

                            <div className="form-inputs">
                                <label htmlFor="envDisplay" className="form-label fieldLabel">
                                    Display
                                </label>
                                <input 
                                    id="envDisplay" 
                                    type="boolean" 
                                    name="envDisplay" 
                                    className="form-control"
                                    value={state.envDisplay}
                                    onChange={handleChange}
                                />
                                {/* {errors.envDescription && <p>{errors.envDescription}</p>} */}
                            </div>     

                            <div className="form-inputs">
                                <div className="membersLabels">
                                    <label htmlFor="envMembers" className="form-label fieldLabel">
                                        Members    
                                    </label>
                                    <AddCircleOutlineOutlinedIcon />
                                </div>
                                <ol className="allMembers">
                                    {state.envMembers.map((member) => (
                                        <input key={member.email} name="envMembers.displayName" onChange={handleChange} value={member.displayName} />
                                    ))}

                                </ol>    
                            </div>                                                    

                        </div>

                    </section>
                </div>
                <button className='form-input-btn' type="submit">Save</button>   
            </form>

            

        </div>
    )
}

export default EnvEdit
