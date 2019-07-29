import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import uuid from 'uuid';



export default class MapPage extends React.Component {
  renderDocuments(){
    data=this.props.filesList[0].data
    console.log(data);
  }


    onCoverLetterUpload(e) {
        let files = e.target.files;
    
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
      
          e.preventDefault();
          Meteor.call('files.saveFile', e.target.result, uuid(), Meteor.userId())
        }
        // reader.readAsDataURL(e.target.result);
      }
    

    render() {
        return (
            <div className="files">
                <Form>
                    <Label for="jobDocumentUpload">Upload Documents</Label>
                    <Input type="file" name="coverletter" id="coverletter" onChange={(e) => this.onCoverLetterUpload(e)} >
                    </Input>
                </Form>
            </div>
        );
    }
  }