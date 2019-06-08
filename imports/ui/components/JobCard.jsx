import React from 'react';
import { Component } from 'react';
// import '../../../client/main.css';

export default class JobCard extends Component {
  render() {
    const {id, title, company, status} = this.props;

    return (
      <div>
        <p>{ title }</p>
        <p>{ company }</p>
        <p>Status: { status }</p>
      </div>
    );
  }
}