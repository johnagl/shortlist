import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export default Jobs = new Mongo.Collection('jobs');

if (Meteor.isServer) {
    Meteor.publish('jobs', function jobsPublication(){
        return Jobs.find({owner: this.userId});
    })
}

Meteor.methods({

    'jobs.insert'(job){
        check(job._id, String);
        check(job.company, String);
        check(job.title, String);
        Jobs.insert(job);
    },
    'jobs.remove'(id){
        Jobs.remove({_id : id});

    },
    'jobs.update'(job){
        Jobs.update(job._id, job);
    },
    'jobs.updatePhoneInterview'(id, start, end, company){


        let newPhoneInterview = {
            id: id,
            start: start,
            end: end,
            title: 'Phone Interview  w/ ' + company,
            type: 'phone interview',
            company: company,
  
          }

        Jobs.update({_id: id}, {$set: {phoneInterview: newPhoneInterview }});
    },
    'jobs.updateOnSiteInterview'(id, start, end, company){


        let newOnSiteInterview = {
            id: id,
            start: start,
            end: end,
            title: 'On Site Interview  @ ' + company,
            type: 'on site interview',
            company: company,
  
          }

        Jobs.update({_id: id}, {$set: {onSiteInterview: newOnSiteInterview}});
    }
})