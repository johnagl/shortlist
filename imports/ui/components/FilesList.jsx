import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import uuid from 'uuid';



export default class MapPage extends React.Component {
    onCoverLetterUpload(e) {
        let files = e.target.files;
    
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        

        reader.onload = (e) => {
          // e.preventDefault();
          // console.log("data " + e.target.result);
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
                    <Input type="file" name="coverletter" id="coverletter" accept="pdf/*" onChange={(e) => this.onCoverLetterUpload(e)} >
                    </Input>
                </Form>
            </div>
        );
    }
  }