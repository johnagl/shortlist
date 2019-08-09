import React, { Component } from 'react';
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
    let pdf =  <FontAwesomeIcon style={{color: "#D51B1E", fontSize: "14pt"}} icon={faFilePdf} />
    let word = <FontAwesomeIcon style={{color: "#1565C0", fontSize: "14pt"}} icon={faFileWord} />
    let img =  <FontAwesomeIcon style={{color: "#9A15BF", fontSize: "14pt"}} icon={faFileImage} />

    return (
      <tr className="document">
        <td>
          <div>
          { this.props.fileExt === "pdf" ? pdf : this.props.fileExt === "docx" ? word : img } {this.props.fileName}
          </div>
        </td>

        <td>
          <div>
          {this.props.fileDate.getDate()}/{this.props.fileDate.getMonth()+1}/{this.props.fileDate.getFullYear()}
          </div>
        </td>

        <td>
          <div>
          {this.props.fileExt}
          </div>
        </td>

        <td>
          <div>
          {prettyBytes(this.props.fileSize)}
          </div>
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














