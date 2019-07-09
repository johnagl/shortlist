import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export default Stages = new Mongo.Collection('stages');

if (Meteor.isServer) {
    Meteor.publish('stages', function stagesPublication(){
        return Stages.find();
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