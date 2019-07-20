import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export default Files = new Mongo.Collection('files');

// FS.collection instead might be useful:
// // DocFiles = new FS.Collection("docfiles", {
// //     stores: [new FS.Store.FileSystem("docfiles", {path: "D:/meteor_uploads"})]
// //   });

if (Meteor.isServer) {
    Meteor.publish('files', function filesPublication(){
        return Files.find({owner: this.userId});
    })
}

Meteor.methods({
    // 'files.saveFile' : function(buffer){
    //     Files.insert(buffer);
    // }  

    'files.saveFile'(coverletter, id, owner) {
        Files.insert({data: coverletter, _id: id, owner: owner})
}
})