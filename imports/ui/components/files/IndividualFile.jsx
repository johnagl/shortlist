import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileWord, faFileImage } from '@fortawesome/free-solid-svg-icons';
const prettyBytes = require('pretty-bytes');

class IndividualFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    
    this.removeFile = this.removeFile.bind(this);
    this.renameFile = this.renameFile.bind(this);

  }

  // propTypes = {
  //   fileName: PropTypes.string.isRequired,
  //   fileSize: PropTypes.number.isRequired,
  //   fileUrl: PropTypes.string,
  //   fileId: PropTypes.string.isRequired
  // }

  printDate(){
    this.props.fileDate.getDate();
  }
  removeFile(){
    let conf = confirm('Are you sure you want to delete the file?') || false;
    if (conf == true) {
      Meteor.call('RemoveFile', this.props.fileId, function (err, res) {
        if (err)
          console.log(err);
      })
    }
  }

  renameFile(){

    let validName = /[^a-zA-Z0-9 \.:\+()\-_%!&]/gi;
    let prompt    = window.prompt('New file name?', this.props.fileName);

    // Replace any non valid characters, also do this on the server
    if (prompt) {
      prompt = prompt.replace(validName, '-');
      prompt.trim();
    }

    if (prompt.length != 0) {
      Meteor.call('RenameFile', this.props.fileId, prompt, function (err, res) {
        if (err)
          console.log(err);
      })
    }
  }

  render() {
    // const size = filesize();
    let pdf =  <FontAwesomeIcon style={{color: "#D51B1E"}} icon={faFilePdf} />
    let word = <FontAwesomeIcon style={{color: "#1565C0"}} icon={faFileWord} />
    let img =  <FontAwesomeIcon style={{color: "#9A15BF"}} icon={faFileImage} />

    return (
      <tr className="document">
        <td>
          { this.props.fileExt === "pdf" ? pdf : this.props.fileExt === "docx" ? word : img } {this.props.fileName}
        </td>

        <td>
          {this.props.fileDate.getDate()}/{this.props.fileDate.getMonth()+1}/{this.props.fileDate.getFullYear()}
        </td>

        <td>
          {this.props.fileExt}
        </td>

        <td>
          {prettyBytes(this.props.fileSize)}
        </td>

        <td>
          <button style={{'backgroundColor':'#003DA5','borderColor':'#003DA5'}} onClick={this.renameFile} className="btn btn-outline btn-primary btn-sm">
            Rename
          </button>
        </td>

        <td>
          <a style={{'backgroundColor':'#003DA5','borderColor':'#003DA5'}} href={this.props.fileUrl} className="btn btn-outline btn-primary btn-sm" target="_blank">
            View
          </a>
        </td>

        <td>
          <button style={{'backgroundColor':'red'}} onClick={this.removeFile} className="btn btn-outline btn-danger btn-sm">
            Delete
          </button>
        </td>
      </tr>);
  }
}
export default IndividualFile;


// return <div className="m-t-sm">
// <div className="row">
//   <div className="col-md-12">
//     <strong>{this.props.fileName}</strong>
//     <div className="m-b-sm">
//     </div>
//   </div>
// </div>

// <div className="row">
//   <div className="col-md-3">
//     <button style={{'backgroundColor':'#003DA5','borderColor':'#003DA5'}} onClick={this.renameFile} className="btn btn-outline btn-primary btn-sm">
//       Rename
//     </button>
//   </div>

//   <div className="col-md-3">
//     <a style={{'backgroundColor':'#003DA5','borderColor':'#003DA5'}} href={this.props.fileUrl} className="btn btn-outline btn-primary btn-sm"
//        target="_blank">View</a>
//   </div>

//   <div className="col-md-2">
//     <button style={{'backgroundColor':'red'}} onClick={this.removeFile} className="btn btn-outline btn-danger btn-sm">
//       Delete
//     </button>
//   </div>

//   {/* <div className="col-md-4">
//     Size: {this.props.fileSize}
//   </div> */}

//   <div className="col-md-4">
//     Date Created: {this.props.fileDate.getDate()}/{this.props.fileDate.getMonth()+1}/{this.props.fileDate.getFullYear()}
//   </div>
// </div>
// </div>






// let pdf =  <FontAwesomeIcon style={{color: "#D51B1E"}} icon={faFilePdf} />
// let word = <FontAwesomeIcon style={{color: "#1565C0"}} icon={faFileWord} />
// let img =  <FontAwesomeIcon style={{color: "#9A15BF"}} icon={faFileImage} />

// return (
//   <div className="document">
//     <div className="document-icon">
//       { this.props.fileExt === "pdf" ? pdf : this.props.fileExt === "docx" ? word : img }
//     </div>
//     <p>{this.props.fileName}</p>



//   {/* <div className="row">
//     <div className="col-md-12">
//       <span>{this.props.fileName}</span>
//       <div className="m-b-sm">
//       </div>
//     </div>
//   </div> */}

//   <div className="row">
//     <div className="col-md-3">
//       <button style={{'backgroundColor':'#003DA5','borderColor':'#003DA5'}} onClick={this.renameFile} className="btn btn-outline btn-primary btn-sm">
//         Rename
//       </button>
//     </div>

//     <div className="col-md-3">
//       <button style={{'backgroundColor':'#003DA5','borderColor':'#003DA5'}} onClick={this.renameFile} className="btn btn-outline btn-primary btn-sm">
//         Rename
//       </button>
//     </div>

//     <div className="col-md-3">
//       <a style={{'backgroundColor':'#003DA5','borderColor':'#003DA5'}} href={this.props.fileUrl} className="btn btn-outline btn-primary btn-sm"
//          target="_blank">View</a>
//     </div>

//     <div className="col-md-2">
//       <button style={{'backgroundColor':'red'}} onClick={this.removeFile} className="btn btn-outline btn-danger btn-sm">
//         Delete
//       </button>
//     </div>

//     {/* <div className="col-md-4">
//       Size: {this.props.fileSize}
//     </div> */}

//     <div className="col-md-4">
//       Date Created: {this.props.fileDate.getDate()}/{this.props.fileDate.getMonth()+1}/{this.props.fileDate.getFullYear()}
//     </div>
//   </div>
// </div>);