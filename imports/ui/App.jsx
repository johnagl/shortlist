import React from 'react';
import { connect } from 'react-redux';
import  Jobs  from '../api/jobs.js';
import Stages from '../api/stages.js';
import Files from '../api/files.js';
import DashboardPage from './components/DashboardPage';
import MapPage from './components/MapPage';
import CalendarPage from './components/CalendarPage';
import FilesList from './components/FilesList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import LoginForm from './components/LoginForm.jsx';
import UserFiles from '../api/filesCol.js'

import '../../client/main.css';
import { withTracker } from 'meteor/react-meteor-data';
import FileUpload from './components/files/FileUpload.jsx';



class App extends React.Component {
  onClick() {
    Meteor.logout();
  }
  render() {
      
    return(
      <div>
      <div id="App">
        {Meteor.userId()  ? 
        <BrowserRouter>
          <Navbar/>
          <div className="flex-container">
            <Switch>
              <Route 
                exact path='/' 
                render={(routeProps) => (
                  <DashboardPage {...routeProps} jobsList={this.props.jobsList} stagesList={this.props.stagesList} />
                )}
                // component={DashboardPage} 
              />
              {/* <Route 
                exact path='/files' 
                render={(routeProps) => (
                  <FilesList {...routeProps} filesList={this.props.filesList} />
                )}
              /> */}
              <Route path='/files' component={FileUpload}/>
              <Route path='/map' component={MapPage} />
              <Route path='/calendar' component={CalendarPage} />
            </Switch>
          </div>
        </BrowserRouter> : <LoginForm currentUser={this.props.currentUser} stagesList = {this.props.stagesList}/>
        }
      </div>
      {/* <Footer/> */}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('jobs');
  Meteor.subscribe('stages');
  Meteor.subscribe('files.images.all');
  return {
    jobsList: Jobs.find({}).fetch(),
    stagesList: Stages.find({}).fetch(),
    currentUser: Meteor.user(),
    // filesList: Files.find({}).fetch()
  };
})(App);