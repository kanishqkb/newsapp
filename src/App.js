import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={progress:0}
  setProgress=(progre)=>{
    this.setState({progress:progre})
  }
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        
        
        <Switch>
        <Route exact  path="/">
            <News  progress={this.setProgress}  key="general"   pagesize={5}    category="general" counrty="in"     />
            </Route>
          <Route exact  path="/sports">
            <News  progress={this.setProgress}  key="sports"   pagesize={5}    category="sports" counrty="in"     />
          </Route>
          <Route exact  path="/business">
            <News  progress={this.setProgress}  key="business"   pagesize={5}    category="business" counrty="in"     />
          </Route>
          <Route exact  path="/health">
            <News  progress={this.setProgress}  key="health"   pagesize={5}    category="health" counrty="in"     />
          </Route>
          <Route exact  path="/technology">
            <News  progress={this.setProgress}  key="technology"   pagesize={5}    category="technology" counrty="in"     />
          </Route>
          <Route exact  path="/entertainment">
            <News  progress={this.setProgress}  key="entertainment"   pagesize={5}    category="entertainment" counrty="in"     />
          </Route>
          <Route exact  path="/science">
            <News  progress={this.setProgress}  key="science"   pagesize={5}    category="science" counrty="in"     />
          </Route>
         
        </Switch>
        
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      </div>
      </Router>
    )
  }
}
