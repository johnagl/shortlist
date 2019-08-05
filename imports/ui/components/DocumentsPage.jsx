import React, { Component } from "react";
import FileUploadComponent from "./files/FileUpload.jsx";
import { Meteor } from 'meteor/meteor';

export default class DocumentsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<div className="documents-page">
				<h2>My Documents</h2>
				<FileUploadComponent />
			</div>
		);
	}
}