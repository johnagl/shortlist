import { Meteor } from 'meteor/meteor';
import Links from '../imports/api/links.js';
import Jobs from '../imports/api/jobs.js';
import Stages from '../imports/api/stages.js';
import Files from '../imports/api/files.js'

function insertJob(company, title) {
  Jobs.insert(
    { 
      company, 
      title, 
      createdAt: new Date() 
    });
}

function insertStage(title, color) {
  Stages.insert(
    { 
      title, 
      color, 
      jobs:[] 
    });
    
}

Meteor.startup(() => {

  // If the Stages collection is empty, add some data.
  if (Stages.find().count() === 0) {
    insertStage("Shortlist", "#EE6352");
    insertStage("Applied", "#FFB43D");
    insertStage("Phone Interview", "#46B4A4");
    insertStage("On Site Interview", "#1A80E0");
    insertStage("Offer","#7A00D8");
    insertStage("Rejected", "#000000");
  }

  // If the Jobs collection is empty, add some data.
  // if (Jobs.find().count() === 0) {
  //   insertJob(
  //     'SAP',
  //     'Software Developer Co-op'
  //   );

  //   insertJob(
  //     'Hootsuite',
  //     'Full-Stack Developer'
  //   );

  //   insertJob(
  //     'Amazon',
  //     'Junior Developer'
  //   );

  //   insertJob(
  //     'Apple',
  //     'Software Engineering Intern'
  //   );
  // }
});
