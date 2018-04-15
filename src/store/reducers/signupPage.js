import * as actionTypes from '../actions/actionTypes';

const initialState={
    

};
const saveToLocalStorage = values => {

        const formData = localStorage.getItem('formData')
    if(!formData){
        localStorage.setItem('formData',JSON.stringify(values))
    }
    else{
        console.log(JSON.parse(formData))
        const mergeValues = Object.assign({},JSON.parse(formData),values)
    localStorage.setItem('formData',JSON.stringify(mergeValues))
    }
}
const saveToLocalStorageImage = values => {
    const formData = JSON.parse(localStorage.getItem('formData'))
    formData.image = values;
    localStorage.setItem('formData',JSON.stringify(formData))
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SUBMIT_FORM:
            saveToLocalStorage(action.payload);
            return state;

        case actionTypes.SUBMIT_IMAGE:
            saveToLocalStorageImage(action.payload);
            return state;

        case actionTypes.SUBMIT_LOGIN:
            return state;

        default: return state;
    }
}

export default reducer;