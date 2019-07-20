import React from 'react';
import Jobs from '../../api/jobs.js';

export default class MapPage extends React.Component {

    render() {
        return (
            <div className="maps">
                <p>this is the map page</p>
                {/* {Jobs.find().pretty()} */}
            </div>
          );
    }
  }