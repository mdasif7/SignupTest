import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import SignUpReduxForm from './InputData2/InputData2';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class SignupPage2 extends Component {

    constructor() {
        super();
        this.state = { submitSuccess: false };
        this.submitValues = this.submitValues.bind(this);
    }
    submitValues = (values) => {
        this.props.onSubmitForm(values);
        this.setState({ submitSuccess: true })
    }

    render() {
        if (this.state.submitSuccess) {
            return <Redirect to='/signuppage3' />
        }
        return (
            <div>
                <Header>
                    Signup Upload Image Page
                </Header>
                <SignUpReduxForm onSubmit={(values) => this.submitValues({ values })} />

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitForm: (values) => (dispatch(actions.submitImage(values)))
    };
};
export default connect(null, mapDispatchToProps)(SignupPage2);