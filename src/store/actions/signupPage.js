import * as  actionTypes from './actionTypes';


export const submitForm=values=>{
    return{
        type:actionTypes.SUBMIT_FORM,
        payload:values
    };
};

export const submitImage = values => {
    return {
        type:actionTypes.SUBMIT_IMAGE,
        payload:values
    }
}
export const submitLogin= values=>{
    return{
        type:actionTypes.SUBMIT_LOGIN,
        payload:values
    }
}
