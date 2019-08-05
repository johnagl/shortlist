import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export default Stages = new Mongo.Collection('stages');

if (Meteor.isServer) {
    Meteor.publish('stages', function stagesPublication(){
        return Stages.find({owner: this.userId});
    })
}

Meteor.methods({

    'stages.insertJob'(stageId, jobId){
        
        Stages.update(
            { owner: this.userId, stageId : stageId},
            { $push: {"jobs": jobId}}
        );        

    },
    'stages.createStages'(){
        Stages.insert({ "owner": this.userId, "index": 0, "stageId" : "9wwYfx3krNhPzWm9H", "title" : "Interested", "color" : "#EE6352", "jobs" : [ ]})
        Stages.insert({ "owner": this.userId, "index": 1, "stageId" : "QKznhRbCBDiCxNsH4", "title" : "Applied", "color" : "#FFB43D", "jobs" : [ ] })
        Stages.insert({ "owner": this.userId, "index": 2, "stageId" : "CszARckwuJHSvna4D", "title" : "Phone Interview", "color" : "#46B4A4", "jobs" : [ ] })
        Stages.insert({ "owner": this.userId, "index": 3, "stageId" : "34AEJ7NT8dMRRtmdp", "title" : "On Site Interview", "color" : "#1A80E0", "jobs" : [ ]})
        Stages.insert({ "owner": this.userId, "index": 4, "stageId" : "i2QWrmNM9pBpfi7nZ", "title" : "Offer", "color" : "#7A00D8", "jobs" : [ ] })
        Stages.insert({ "owner": this.userId, "index": 5, "stageId" : "t6ML67Pysfr3dbxgv", "title" : "Rejected", "color" : "#000000", "jobs" : [ ] })

    },
    
    'stages.removeJob'(stageId, jobId){
        Stages.update({owner: this.userId, stageId: stageId }, { $pull: {"jobs": jobId}});
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