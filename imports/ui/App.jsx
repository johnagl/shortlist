import React from 'react';
import { connect } from 'react-redux';
import DashboardPage from './components/DashboardPage';
import MapPage from './components/MapPage';
import CalendarPage from './components/CalendarPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import '../../client/main.css';


class App extends React.Component {


  render() {
    return(
      <BrowserRouter>
        <Navbar/>
        <div className="App flex-container">
          <Switch>
            <Route exact path='/' component={DashboardPage} />
            <Route path='/map' component={MapPage} />
            <Route path='/calendar' component={CalendarPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    view: state.jobs.view
  }
}

export default connect(mapStateToProps)(App);


<BrowserRouter>
<Navbar/>
<div className="App flex-container">
  <Switch>
    <Route exact path='/' component={DashboardPage} />
    <Route path='/map' component={MapPage} />
    <Route path='/calendar' component={CalendarPage} />
  </Switch>
</div>
</BrowserRouter>