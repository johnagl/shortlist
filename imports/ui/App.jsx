import React from 'react';
import { connect } from 'react-redux';
import  Links  from '../api/links.js';
import DashboardPage from './components/DashboardPage';
import MapPage from './components/MapPage';
import CalendarPage from './components/CalendarPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import '../../client/main.css';
import { withTracker } from 'meteor/react-meteor-data';



class App extends React.Component {


  render() {
    console.log(Links.find({}).fetch());
    return(
      <div id="App">
        <BrowserRouter>
          <Navbar/>
          <div className="flex-container">
            <Switch>
              <Route exact path='/' component={DashboardPage} />
              <Route path='/map' component={MapPage} />
              <Route path='/calendar' component={CalendarPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    view: state.jobs.view
  }
}

// const withTracker = () => {
//   return {
//     links: Links.find({}).fetch(),
//   };
// }



// export default withTracker(() => {
//   return {
//     links: Links.find({}).fetch(),
//   };
// })(App);

export default connect(mapStateToProps)(App);




{/* <BrowserRouter>
<Navbar/>
<div className="App flex-container">
  <Switch>
    <Route exact path='/' component={DashboardPage} />
    <Route path='/map' component={MapPage} />
    <Route path='/calendar' component={CalendarPage} />
  </Switch>
</div>
</BrowserRouter> */}