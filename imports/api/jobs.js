import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export default Jobs = new Mongo.Collection('jobs');

if (Meteor.isServer) {
    Meteor.publish('jobs', function jobsPublication(){
        return Jobs.find();
    })
}

Meteor.methods({

    //remove = all methods have to be in api folder
    //remove = you have to publish and subscribe

    'jobs.insert'(job){
        check(job._id, String);
        check(job.company, String);
        check(job.title, String);
        // if (! this.userId){
        //     throw new Meteor.Error('not authorized');
        // }
        Jobs.insert(job);
    },
    'jobs.remove'(id){
        Jobs.remove({_id : id});

    },
})