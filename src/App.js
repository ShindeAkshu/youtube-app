import {useState} from 'react';
import React,{Component} from 'react';
import Home from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';

const API_KEY = process.env.React_APP_YT_API_KEY;

class App extends Component {
     render(){
     return(
      <AppLayout>
        <Switch>
          <Route path="/feed/tranding" component={Trending}/>
        </Switch>
      </AppLayout>
     );
}

}


export default App;
