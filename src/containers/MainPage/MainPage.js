import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/UI/Button/Button';
import {Link} from 'react-router-dom';


class MainPage extends Component{

    onClickSignup=()=>{
        this.props.history.replace('/signuppage');
    }
    onClickLogin=()=>{
        this.props.history.replace('/loginpage');
    }

    render(){
        return(
            <div>
                <Header>
                    Signup or Login
                </Header> 
                <Button clicked={this.onClickSignup}><Link 
                style={{color:'white'}} 
                to="/signuppage"
                >Click for Signup</Link></Button>
                <Button clicked={this.onClickLogin}><Link style={{color:'white'}} to="/loginpage">Click for Login</Link></Button>
            
            </div>
        );
    }
}
export default MainPage;