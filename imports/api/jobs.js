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
        var oldJobPhoneInterview = Jobs.find({_id: id}).fetch();
        var durationPhoneInterview = oldJobPhoneInterview[0].phoneInterview.durationPhoneInterview;


        let newPhoneInterview = {
            id: id,
            start: start,
            end: end,
            durationPhoneInterview: durationPhoneInterview,
            title: 'Phone Interview w/ ' + company,
            type: 'phone interview',
            company: company,
  
          }

        Jobs.update({_id: id}, {$set: {phoneInterview: newPhoneInterview }});
    },
    'jobs.updateOnSiteInterview'(id, start, end, company){

        var oldJobOnSiteInterview = Jobs.find({_id: id}).fetch();
        // console.log(oldJobPhoneInterview[0].phoneInterview.durationPhoneInterview);
        var durationOnSiteInterview = oldJobOnSiteInterview[0].onSiteInterview.durationOnSiteInterview;


        let newOnSiteInterview = {
            id: id,
            start: start,
            end: end,
            durationOnSiteInterview: durationOnSiteInterview,
            title: 'On Site Interview @ ' + company,
            type: 'on site interview',
            company: company,
  
          }

        Jobs.update({_id: id}, {$set: {onSiteInterview: newOnSiteInterview}});
    }
})