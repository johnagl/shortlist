import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import Picker from './Picker.jsx';
 
const localizer = momentLocalizer(moment)

class BigCalendar extends Component {

    // state = {
    //   events: []
    // };

    fetchEvents = () => this.setState(
        { events: this.props.eventsList }
    );

    printEvents = () => console.log('PRINT EVENTS: ' + this.props.eventsList);

    componentDidMount() {
        // this.fetchEvents();
        // console.log('Didmount: ' + this.props.eventsList)

    }
  
    render() {
        var events = []

        // this.printEvents();
        // this.fetchEvents();
        // console.log('EVENTS IN BIGCALENDAR: ' + JSON.stringify(this.props.eventsList))
        // var eventsArray = [];
        this.props.eventsList.map(event => {
            events.push(event);
        
        })
        
        // console.log('EVENTS LIST :' + JSON.stringify(this.props.eventsList))
        // console.log(this.state.events);
        

        
  
      return (
        <div className="App">
        {/* <Picker /> */}
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "70vh" }}
          />
          
        </div>
      );
    }
  }
 

export default BigCalendar;