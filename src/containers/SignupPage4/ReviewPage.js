import React, {Component} from 'react';
import RvPage from '../ReviewPage/ReviewPage';
import Button from '../../components/UI/Button/Button';
import {Redirect} from 'react-router-dom';

const saveUser = () => {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if(formData){
      
        localStorage.setItem('user',JSON.stringify(formData));
    }
}
const formData=()=>{
    return JSON.parse(localStorage.getItem('formData'));
}
class ReviewPage extends Component {
    constructor(){
        super();
        this.state={
            redirect:false
        }
        this.saveRedirect=this.saveRedirect.bind(this);
    }
    saveRedirect(){
        saveUser();
        this.setState({redirect:true});
    }

    render(){
        if(this.state.redirect){
            return <Redirect to='/loginpage' />
        }
        return(
            <div>
            <RvPage formData={formData()}/>
            <Button clicked={this.saveRedirect}>Submit</Button>
            </div>
        );
    }
}

export default ReviewPage; 