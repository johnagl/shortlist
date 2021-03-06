import UserFiles from './FilesCol.js'
import { Meteor } from 'meteor/meteor';

if (Meteor.isClient) {
    Meteor.subscribe('files.userFiles.all');
}
  
if (Meteor.isServer) {
    Meteor.publish('files.all', function () {
        return UserFiles.find( {"meta.userId" : this.userId}).cursor;
    });
}

Meteor.methods({
    'RenameFile'(id, newName){
        UserFiles.update({'_id':id},{$set:{'name': newName}})
    },
    'RemoveFile'(id) {
       
        UserFiles.remove({_id: id}, function (error) {
            if (error) {
              console.error("File wasn't removed, error: " + error.reason)
            } else {
              console.info("File successfully removed");
            }
        });

    },
    
});