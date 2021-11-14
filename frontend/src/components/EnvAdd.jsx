import React  from 'react'
import useForm from './oldcontent/manageEnv/useForm'
import validateInfo from './oldcontent/manageEnv/validateInfo'
import Sidebar from './Sidebar'
import Header from './Header'
import {Link} from 'react-router-dom';
import '../css/manageEnvironments.css'
import '../App.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import { useStateValue } from '../utils/StateProvider';

const EnvAdd = ({submitForm}) => {

    const {values,handleChange,handleSubmit,errors} = useForm(validateInfo,submitForm)

    return (
        <>
            <Header />
            <div className="home-content">
                    
                <Sidebar />
                    
                <div className="manageEnvContent">
                    <div className="header">
                        <h1 className="adminTitle">Environments</h1>
                        <Link className="addEnv adminTitle" to="/environments/add"><AddCircleOutlineOutlinedIcon /></Link>
                    </div>
                </div>       

                <div className="form-content-right">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="manageEnvContent">
                            <h1 className="adminTitle">Environments</h1>
                            <section className="envForm"> 

                                <div className="leftside">         
                                    <div>arrow</div>                
                                    <h1>Add a new environment</h1>
                                    <div className="form-inputs">
                                        <label htmlFor="envName" className="form-label fieldLabel">
                                            Environment Name
                                        </label>
                                        <input 
                                            id="envName" 
                                            type="text" 
                                            name="envName" 
                                            className="form-control"
                                            placeholder="Enter environment name"
                                            value={values.envName}
                                            onChange={handleChange}
                                        />
                                        {errors.envName && <p>{errors.envName}</p>}
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
                                            placeholder="Enter a description"
                                            value={values.envDescription}
                                            onChange={handleChange}
                                        />
                                        {errors.envDescription && <p>{errors.envDescription}</p>}
                                    </div>

                                    <div className="form-inputs">
                                        <label htmlFor="envImageURL" className="form-label fieldLabel">
                                            Image Banner URL
                                        </label>
                                        <input 
                                            id="envImageURL" 
                                            type="text" 
                                            name="envImageURL" 
                                            className="form-control"
                                            placeholder="Enter a URL for an environment banner"
                                            value={values.envImageURL}
                                            onChange={handleChange}
                                        />
                                        {errors.envImageURL && <p>{errors.envImageURL}</p>}
                                    </div>
                                </div>

                            </section>
                            <button className='form-input-btn' type="submit">Save</button>   
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default EnvAdd
