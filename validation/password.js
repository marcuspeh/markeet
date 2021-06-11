const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePasswordInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.oldPassword = !isEmpty(data.oldPassword) ? data.oldPassword : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    
    // check if password is changing
    if (Validator.isEmpty(data.oldPassword) && Validator.isEmpty(data.password) && Validator.isEmpty(data.password2))
        return {
            errors, 
            isValid: false
        }

    // Old Password checks
    if (Validator.isEmpty(data.oldPassword)) 
        errors.oldPassword = "Old Password is required";
    
    // Password checks
    else if (Validator.isEmpty(data.password)) 
        errors.password = "Password field is required";
    
    else if (Validator.isEmpty(data.password2)) 
        errors.password2 = "Confirm password field is required";
    
    else if (!Validator.isLength(data.password, { min: 6, max: 30 })) 
        errors.password = "Password must be at least 6 characters";
    
    else if (!Validator.equals(data.password, data.password2)) 
        errors.password2 = "Passwords must match";
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};