import { useState } from 'react';
// import validateInfo from './validateInfo'
import axios from 'axios';

const useForm = (validateInfo,callback) => {

    const [values, setValues] = useState({
        envName: '',
        envDescription:'',
        envImageURL:'',
        envActive:'',
        envDisplay:'',
        envCreateDate:'',
        envTeacher: {},
        envAnnouncements: []
        // envTopics: []

    });

    const [errors, setErrors] =useState({});
    // const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        // console.log("e.target",e.target)
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));
        // console.log("errors: ",errors)
        // console.log("isempty: ",JSON.stringify(errors)==JSON.stringify({}))
        if((JSON.stringify(errors)===JSON.stringify({}))){
            // console.log("running")
            // setIsSubmitting(true);
            axios.post('http://localhost:5000/addEnv',values)
            .then(res => {
                console.log("Returned Data",res.data)}
            )
            .catch(err => { console.log(err)});
        }
    };



    return {handleChange,values, handleSubmit,errors};
};

export default useForm;