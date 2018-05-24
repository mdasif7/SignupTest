import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import classes from './ReviewPage.css';
const getLoginData = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}

class ReviewPage extends Component {


    render() {
        const { formData, user } = this.props;
        console.log(formData);
        return (
            <div>
                <Header>
                    Profile Page
                </Header>
                <div className={classes.ReviewPage}>
                    <h4>First Name: <span  className={classes.Span}>{formData ? formData.firstName : user.firstName}</span></h4>
                    <h4>Last Name:  <span  className={classes.Span}>{formData ? formData.lastName : user.lastName}</span></h4>
                    <h4>Email:<span className={classes.Span}>{formData ? formData.email : user.email}</span></h4>
                    <h4>Address:<span  className={classes.Span}>{formData ? formData.address : user.address}</span></h4>
                    <h4>City:<span  className={classes.Span}>{formData ? formData.city : user.city}</span></h4>
                    <h4>Picture: </h4><img className={classes.Img} src={formData ? formData.image.values : user.image.values} alt='Display Profile'/>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: getLoginData()
    };
}
export default connect(mapStateToProps)(ReviewPage);