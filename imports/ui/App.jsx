import React from 'react';
import Hello from './components/Hello.jsx';
import Info from './components/Info.jsx';
import JobStageCategory from './components/JobStageCategory.jsx';
import JobStageCategoryDropDown from './components/JobStageCategoryDropDown.jsx';
import AddJobPopup from './components/AddJobPopup.jsx';
import AddJobForm from './components/AddJobForm.jsx'

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <JobStageCategory />
    <Hello />
    <Info />
  </div>
);

export default App;
