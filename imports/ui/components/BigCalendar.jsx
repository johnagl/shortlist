import React, { Component } from "react";
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { fetchEvents, editJobEvent } from '../actions/index';

 
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class BigCalendar extends Component {

    onEventDrop = ({ event, start, end, allDay }) => {
      this.props.editJobEvent(event, event.id, start, end, event.company, this.props.jobsList);
    };
  
    render() {

      var eventsTest = []
      this.props.jobs.map(job => {
        if (job.phoneInterview.start !== null){
          eventsTest.push(job.phoneInterview);

      }

      if (job.onSiteInterview.start !== null){
          eventsTest.push(job.onSiteInterview);

      }

      

      })
           
      return (
        <div >
        <DnDCalendar
          defaultDate={new Date()}
          defaultView="month"
          events={eventsTest}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          resizableAccessor={() => false}
          style={{ height: "85vh" }}
        />     
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
    return { jobs: state.jobs.events.events, view: state.jobs.view }
}
 

export default connect(mapStateToProps, { fetchEvents, editJobEvent })(BigCalendar);
