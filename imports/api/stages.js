import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Jobs from './jobs.js';
import { ReactiveAggregate } from 'meteor/jcbernack:reactive-aggregate';

export default Stages = new Mongo.Collection('stages');

//all the users jobs in an array as the input
// // Jobs.find({owner:this.userId})
// JobsArray() {
//     Jobs.find({owner:this.userId}).fetch();
// };


if (Meteor.isServer) {
    Meteor.publish('stages', function stagesPublication() {
        JobsArray = Jobs.find({ owner: this.userId }).fetch();
        // console.log((Stages.find({})).fetch());
        // console.log((Stages.find({}, {jobs: {$filter: !{$in :(Jobs.find({owner:this.userId}))}}})).fetch());
        return Stages.find({})
        // console.log(ReactiveAggregate(this, Stages, [{
        //     $project: {
        //         jobs: {
        //             $filter: {
        //                 input: "$jobs",
        //                 cond: { $in: this, JobsArray }
        //             }
        //         }
        //     }
        // }]).fetch)
        // return Stages.find({}, {jobs: {$filter: (Jobs.find(owner ,this.userId))}});
        // return Stages.aggregate([
        //     {
        //         $project: {
        //             jobs: {
        //                 $filter: {
        //                     input: "$jobs",
        //                     cond: { $in: this, JobsArray }
        //                 }
        //             }
        //         }
        //     }   
        // ]) 
    })
}


Meteor.methods({

    'stages.insertJob'(stageId, jobId){
        
        Stages.update(
            { _id : stageId},
            { $push: {"jobs": jobId}}
        );        

    },
    'stages.removeJob'(stageId, jobId){
        Stages.update({_id : stageId }, { $pull: {"jobs": jobId}});
    },
    'stages.drag'(droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId){
        let sourceJobs = Stages.findOne({_id: droppableIdStart}).jobs; 

        let destJobs = Stages.findOne({_id: droppableIdEnd}).jobs;

        if(droppableIdStart === droppableIdEnd) {
           
            const jobId = destJobs.splice(droppableIndexStart, 1);
            destJobs.splice(droppableIndexEnd, 0, ...jobId);

            Stages.update({_id: droppableIdEnd}, {$set: {jobs: destJobs}});
        } else {
            
            const jobId = sourceJobs.splice(droppableIndexStart, 1);
            destJobs.splice(droppableIndexEnd, 0, ...jobId);
            Stages.update({_id: droppableIdStart}, {$set: {jobs: sourceJobs}});
            Stages.update({_id: droppableIdEnd}, {$set: {jobs: destJobs}});
        }
    }
})