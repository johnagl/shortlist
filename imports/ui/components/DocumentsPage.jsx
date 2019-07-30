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
			<div>
				<h1>Documents Page</h1>
				<hr/>
				<FileUploadComponent />
			</div>
		);
	}
}