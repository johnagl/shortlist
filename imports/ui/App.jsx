import React from 'react';
import Hello from './components/Hello.jsx';
import Info from './components/Info.jsx';
import JobStageCategory from './components/JobStageCategory.jsx'

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <JobStageCategory />
    <Hello />
    <Info />
  </div>
);

export default App;
