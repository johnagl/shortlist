import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '/imports/ui/App';
import store from '../imports/ui/store/store.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../imports/ui/reducers';
// import './main.css';


Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('react-target'));
});

