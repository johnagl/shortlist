import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IndividualFile from './IndividualFile.jsx';
import UserFiles from '../../../api/FilesCol.js'

class FileUploadComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: [],
      progress: 0,
      inProgress: false
    };

    this.uploadIt = this.uploadIt.bind(this);
  }

  uploadIt(e) {
    e.preventDefault();

    let self = this;

    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = e.currentTarget.files[0];

      if (file) {
        let uploadInstance = UserFiles.insert({
          file: file,
          meta: {
            locator: self.props.fileLocator,
            userId: Meteor.userId() // Optional, used to check on server for file tampering
          },
          streams: 'dynamic',
          chunkSize: 'dynamic',
          allowWebWorkers: true // If you see issues with uploads, change this to false
        }, false)

        self.setState({
          uploading: uploadInstance, // Keep track of this instance to use below
          inProgress: true // Show the progress bar now
        });

        // These are the event functions, don't need most of them, it shows where we are in the process
        uploadInstance.on('start', function () {
          console.log('Starting');
        })

        uploadInstance.on('end', function (error, fileObj) {
          console.log('On end File Object: ', fileObj);
        })

        uploadInstance.on('uploaded', function (error, fileObj) {
          console.log('uploaded: ', fileObj);

          // Remove the filename from the upload box
          self.refs['fileinput'].value = '';

          // Reset our state for the next file
          self.setState({
            uploading: [],
            progress: 0,
            inProgress: false
          });
        })

        uploadInstance.on('error', function (error, fileObj) {
          console.log('Error during upload: ' + error)
        });

        uploadInstance.on('progress', function (progress, fileObj) {
          console.log('Upload Percentage: ' + progress)
          // Update our progress bar
          self.setState({
            progress: progress
          });
        });

        uploadInstance.start(); // Must manually start the upload
      }
    }
  }

  // This is our progress bar, bootstrap styled
  // Remove this function if not needed
  showUploads() {
    console.log('**********************************', this.state.uploading);

    if (!_.isEmpty(this.state.uploading)) {
      return <div>
        {this.state.uploading.file.name}

        <div className="progress progress-bar-default">
          <div style={{width: this.state.progress + '%'}} aria-valuemax="100"
             aria-valuemin="0"
             aria-valuenow={this.state.progress || 0} role="progressbar"
             className="progress-bar">
            <span className="sr-only">{this.state.progress}% Complete (success)</span>
            <span>{this.state.progress}%</span>
          </div>
        </div>
      </div>
    }
  }

  uploadStyle = {
    display:"inline"
  }

  uploadPStyle = {
    backgroundColor: "#003DA5",
    padding: "20px",
    color: "#FFFFFF",
    display: "inline",
    border: "2px solid #003DA5",
    cursor: "pointer",
  }
  render() {
    
    if (this.props.files && this.props.docsReadyYet) {

      let fileCursors = this.props.files;

      // Run through each file that the user has stored
      // (make sure the subscription only sends files owned by this user)
      let display = fileCursors.map((aFile, key) => {
        // console.log('A file: ', aFile.link(), aFile.get('name'))
        let link = UserFiles.findOne({_id: aFile._id}).link();  //The "view/download" link

        // Send out components that show details of each file
        return  <IndividualFile key={'file' + key}
            fileName={aFile.name}
            fileUrl={link}
            fileId={aFile._id}
            fileSize={aFile.size}
            fileExt={aFile.ext}
            fileDate={new Date()}
          />
      })

      return <div>
        <div>
					<input style = {{"display":"none"}} type="file" id="fileinput" disabled={this.state.inProgress} ref="fileinput" onChange={this.uploadIt}/>
          <label /* style={this.uploadPStyle} */ className="fileinput" htmlFor="fileinput">Upload New File</label>
        </div>
      
        <div className="documents-table">
          <table>
            <thead>
              <tr>
                <th><div>Name</div></th>
                <th><div>Date Added</div></th>
                <th><div>File Type</div></th>
                <th><div>Size</div></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {display}
            </tbody>
          </table>
        </div>
      </div>
    }
    else return <div>Loading file list</div>;
  }
}

//
// This is the HOC - included in this file just for convenience, but usually kept
// in a separate file to provide separation of concerns.
//
export default withTracker( ( props ) => {
  const filesHandle = Meteor.subscribe('files.all');
  console.log(filesHandle);
  const docsReadyYet = filesHandle.ready();
  console.log(docsReadyYet);
  const files = UserFiles.find({}, {sort: {name: 1}}).fetch();

  return {
    docsReadyYet,
    files,
  };
})(FileUploadComponent);


        // {/* <div className="row m-t-sm m-b-sm">
        //   <div className="col-md-6">

        //     {/* {this.showUploads()} */}

        //   </div>
        //   <div className="col-md-6">
        //   </div>
        // </div> */}