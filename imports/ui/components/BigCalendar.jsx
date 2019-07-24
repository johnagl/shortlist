import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
 
const localizer = momentLocalizer(moment)

class BigCalendar extends Component {

    // state = {
    //   events: []
    // };


    // componentDidMount() {
    //     // this.fetchEvents();
    //     // console.log('Didmount: ' + this.props.eventsList)

    // }
  
    render() {
        var events = []

        this.props.jobsList.map(job => {

        
            // console.log(JSON.stringify(job.phoneInterview));
            if (job.phoneInterview !== "" || job.phoneInterview !== null){
                // var phoneInterview = {
                //     start: job.phoneInterview,
                //     end: job.phoneInterview,
                //     title: 'Phone Interview  ' + job.company

                // }
                events.push(job.phoneInterview);

            }

            if (job.onSiteInterview !== "" || job.onSiteInterview !== null){
                // var onSiteInterview = {
                //     start: job.onSiteInterview,
                //     end: job.onSiteInterview,
                //     title: 'On site ' + job.company

                // }
                events.push(job.onSiteInterview);

            }
        
        })
        
      return (
        <div className="App">
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{ height: "85vh" }}
          />          
        </div>
      );
    }
  }
 

export default BigCalendar;