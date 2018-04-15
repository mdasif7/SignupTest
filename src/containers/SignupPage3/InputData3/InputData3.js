import React from 'react';
import TextField from 'material-ui/TextField';
import classes from './InputData3.css';
import Button from '../../../components/UI/Button/Button';
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
                <b>Enter Email:</b>

                <Field name="email" component={renderInputText} label="email" />
                <b>Enter Password:</b>
                <Field type='password' name="password" component={renderInputText} label="password" />
                <b>Confirm Password</b>
                <Field  type='password' name="confirmpassword" component={renderInputText} label="cofirmpassword"  />
                <Button type='submit' >Submit</Button>
            </form>

        );
    
}

export default reduxForm({
    form: 'InputData',
    validate,
})(InputData);
