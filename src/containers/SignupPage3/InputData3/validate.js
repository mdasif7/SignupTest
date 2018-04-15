const validate = (values) => {
    const errors = {};
    console.log("$$",values)
    const requiredFields = [
    'email',
    'password',
    'confirmpassword',
    ];
    requiredFields.forEach(field => {
    if (!values[field]) {
    errors[field] = 'Required';
    }
    });
    if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
    errors.email = 'Invalid email address';
    }
    if(values.confirmpassword && (values.confirmpassword !== values.password)){
        errors.confirmpassword = 'Passwords should match';
    }
    return errors;
};
export default validate;
