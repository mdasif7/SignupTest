import React from 'react';

import TextField from 'material-ui/TextField';
import classes from './InputData.css';
import Button from '../../../components/UI/Button/Button';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';




const renderInputText = ({ input, label, meta: { touched, error }, ...custom },) => {
    //console.log(touched,error)
    return <div><TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom} /><span style={{color:'red'}}>{touched && error}</span></div>
}


const InputData = (props) => {
    console.log("##",props)

        return (
            <form className={classes.Form} onSubmit={props.handleSubmit}>
                <b>Enter the First Name:</b>

                <Field name="firstName" component={renderInputText} label="firstName" />
                <b>Enter the Last Name:</b>
                <Field name="lastName" component={renderInputText} label="lastName" />
                <b>Address:</b>
                <Field name="address" component={renderInputText} label="address"  />
                <b>City:</b>
                <Field name="city" component={renderInputText} label="city" />
                <br/>
                <Button type='submit' >Submit</Button>
                <Link to="/"
                    className={classes.Link}>Back</Link>
            </form>

        );
    
}

export default reduxForm({
    form: 'InputData',
    validate,
})(InputData);
