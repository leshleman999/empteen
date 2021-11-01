import React, {useState} from 'react'
import AddEnv from '../../EnvAdd'
import FormSuccess from './FormSuccess'
// import '../../../css.manageEnvironments.css'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    
    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.seaaI_7nINRLAI9HF4ZqGQHaEq&pid=Api&P=0&w=263&h=166" alt="spaceshipt" className="form-img" />
                </div>

                {!isSubmitted ? 
                    <AddEnv submitForm={submitForm} /> : 
                    <FormSuccess />}
            </div>
        </>
    )
}

export default Form
