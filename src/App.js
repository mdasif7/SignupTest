import React, {Component, Fragment}from 'react';
import {Route, Switch} from 'react-router-dom';

import SignupPage from './containers/SignupPage/SignupPage';
import SignupPage2 from './containers/SignupPage2/SignupPage2';
import SignupPage3 from './containers/SignupPage3/SignupPage3';

import MainPage from './containers/MainPage/MainPage';
import LoginPage from './containers/LoginPage/LoginPage';
import ReviewPage from './containers/ReviewPage/ReviewPage';
import SignupPage4 from './containers/SignupPage4/ReviewPage';

//import ReactDOM from 'react-dom';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MyAwesomeReactComponent from './MyAwesomeReactComponent';

class  App extends Component {
 
 
 render(){
   return(
    <Fragment>
     {// <MainPage/>
      //<SignupPage />
    }
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/signuppage" component={SignupPage} />
        <Route path="/signuppage2" component={SignupPage2} />
        <Route path="/signuppage3" component={SignupPage3} />
        <Route path="/signuppage4" component={SignupPage4} />
        <Route path="/loginpage" component={LoginPage} />
        <Route path="/reviewpage" component={ReviewPage} />
      </Switch>

    </Fragment>
   );
 }
 
}


export default App;