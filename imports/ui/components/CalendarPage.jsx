import React from 'react';
import BigCalendar from './BigCalendar.jsx';

export default class CalendarPage extends React.Component {

    render() {
        // console.log('EVENTS: ' + JSON.stringify(this.props.eventsList))
        return (
            <div className="calendar">
                <BigCalendar eventsList={this.props.eventsList} jobsList={this.props.jobsList} />
            </div>
          );
    }
  }