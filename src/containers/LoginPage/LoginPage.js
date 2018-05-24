import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import SignUpReduxForm from './LoginInputData/LoginInputData';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import classes from './LoginPage.css';

import {Button} from 'material-ui';
const login = values => {
    const user = JSON.parse(localStorage.getItem('user'))
    return new Promise((resolve, reject) => {
        if(user){
            if ((user.email === values.email) && (user.password === values.password)) {
                resolve();
            }
            reject();
        }
        else {
            reject();
        }
    })
}

class LoginPage extends Component {
    constructor() {
        super();
        this.state = { loginSuccess: false }
        this.loginRedirect = this.loginRedirect.bind(this);
    }
    loginRedirect(values) {
        this.props.login(values)
        .then(() => (this.props.onLoginForm()))
        .then(() => (this.setState({ loginSuccess: true })))
        .catch(() => (this.setState({ loginError: true })))
    }
    render() {
        if (this.state.loginSuccess) {
            return <Redirect to='/reviewpage' />
        }
        return (
            <div>
                <Header>
                    Login Page
                </Header>
                {this.state.loginError && <h4 style={{color:'red'}}>Email or password is incorrect</h4>}
                <SignUpReduxForm onSubmit={(values) => { this.loginRedirect(values) }} />
                <Button variant="raised" color="primary" className={classes.SignupButton} >
                    <Link 
                    style={{color:'white'}} 
                    to="/signuppage"
                    >Click for Signup
                    </Link>
                </Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginForm: () => (dispatch(actions.submitLogin())),
        login
    };
};
export default connect(null, mapDispatchToProps)(LoginPage);