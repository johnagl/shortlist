import React from 'react';
import { connect } from 'react-redux';
import  Jobs  from '../api/jobs.js';
import Stages from '../api/stages.js';
import DashboardPage from './components/DashboardPage';
import MapPage from './components/MapPage';
import CalendarPage from './components/CalendarPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import '../../client/main.css';
import { withTracker } from 'meteor/react-meteor-data';



class App extends React.Component {


  render() {
    return(
      <div>
      <div id="App">
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
              <Route path='/map' component={MapPage} />
              <Route path='/calendar' component={CalendarPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      <Footer/>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return{
//     view: state.jobs.view
//   }
// }

// export default connect(mapStateToProps)(App);


export default withTracker(() => {
  Meteor.subscribe('jobs');
  Meteor.subscribe('stages');
  return {
    jobsList: Jobs.find({}).fetch(),
    stagesList: Stages.find({}).fetch(),
  };
})(App);





