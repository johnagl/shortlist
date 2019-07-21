import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export default Events = new Mongo.Collection('events');

if (Meteor.isServer) {
    Meteor.publish('events', function eventsPublication(){
        // console.log(Events.find({_id: '5d3134c2e571b4b3d4dd2f72'}));
        return Events.find({});
    })
}

Meteor.methods({
    'events.insert'(event){
        Events.insert(event);
    },


})