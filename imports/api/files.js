import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export default Files = new Mongo.Collection('files')

if (Meteor.isServer) {
    Meteor.publish('files', function filesPublication(){
        return Files.find();
    });
}

Meteor.methods({

    'files.saveFile'(file, uuid, userid){
        Files.insert({"id":uuid, "user": userid, "file":file})
    }
})
