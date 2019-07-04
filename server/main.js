import { Meteor } from 'meteor/meteor';
import Links from '../imports/api/links.js';
import Jobs from '../imports/api/jobs.js';

function insertJob(company, title) {
  Jobs.insert({ company, title, createdAt: new Date() });
}

function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {

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

  // // If the Links collection is empty, add some data.
  // if (Links.find().count() === 0) {
  //   insertLink(
  //     'Do the Tutorial',
  //     'https://www.meteor.com/tutorials/react/creating-an-app'
  //   );

  //   insertLink(
  //     'Follow the Guide',
  //     'http://guide.meteor.com'
  //   );

  //   insertLink(
  //     'Read the Docs',
  //     'https://docs.meteor.com'
  //   );

  //   insertLink(
  //     'Discussions',
  //     'https://forums.meteor.com'
  //   );
  // }
});
