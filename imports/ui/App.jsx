import React from 'react';
import  Jobs  from '../api/jobs.js';
import Stages from '../api/stages.js';
import DashboardPage from './components/DashboardPage';
import CalendarPage from './components/CalendarPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import LoginForm from './components/LoginForm.jsx';
import LandingPage from './components/LandingPage.jsx';
import DocumentsPage from './components/DocumentsPage.jsx';


import '../../client/main.css';
import { withTracker } from 'meteor/react-meteor-data';



class App extends React.Component {
  onClick() {
    Meteor.logout();
  }
  render() {
      
    return(
      <div id="App">
        {Meteor.userId()  ? 
        <BrowserRouter>
          <Navbar/>
          <div className="flex-container">
            <Switch>
              <Route 
                exact path='/home' 
                render={(routeProps) => (
                  <DashboardPage {...routeProps} jobsList={this.props.jobsList} stagesList={this.props.stagesList} />
                )}
              />
              <Route path='/documents' component={DocumentsPage} />
              <Route 
                exact path='/calendar' 
                render={(routeProps) => (
                  <CalendarPage {...routeProps} eventsList={this.props.eventsList} jobsList={this.props.jobsList} />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter> : <LandingPage currentUser={this.props.currentUser} stagesList = {this.props.stagesList}/>
        }{/* <LoginForm currentUser={this.props.currentUser} stagesList = {this.props.stagesList}/> */}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('jobs');
  Meteor.subscribe('stages');
  return {
    jobsList: Jobs.find({}).fetch(),
    stagesList: Stages.find({}, { sort: { index: 1 } }).fetch(),
    currentUser: Meteor.user()
  };
})(App);
