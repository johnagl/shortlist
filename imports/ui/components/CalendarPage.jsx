import React, { Component } from 'react';
import { connect } from 'react-redux';
import BigCalendar from './BigCalendar.jsx';
import { fetchEvents } from '../actions/index';

class CalendarPage extends Component {  

      render() {
        this.props.fetchEvents(this.props.jobsList);
        return (
            <div className="calendar">
                <BigCalendar eventsList={this.props.eventsList} jobsList={this.props.jobsList} />
            </div>
          );
    }
}



  const mapStateToProps = (state) => {
    return { view: state.jobs.view }
}

export default connect(mapStateToProps, { fetchEvents })(CalendarPage);