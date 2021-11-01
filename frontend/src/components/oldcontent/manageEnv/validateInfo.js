export default function validateInfo(values) {
    let errors = {}

    if(!values.envName.trim()) {
        errors.envName = "Enviornment name required"
    }

    if(!values.envDescription.trim()) {
        errors.envDescription = "A Description is required"
    }

    
    if(!values.envImageURL.trim()) {
        errors.envImageURL = "An image URL is required"
    }

  

    return errors
}