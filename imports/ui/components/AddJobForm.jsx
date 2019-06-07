import React, { Component } from 'react';

export default class AddJobForm extends Component {
  render() {
    return (
      <div>
        <form>
          <h3>Add a job</h3>
          <input type="text" id="cname" name="companyName" placeholder="Company Name"></input>
          <input type="text" id="jtitle" name="jobTitle" placeholder="Job Title"></input>
          <select id="jobStageCategories" name="jobStageCategories">
            <option value="wishlist">Wishlist</option>
            <option value="applied">Applied</option>
            <option value="phone">Phone</option>
            <option value="On Site">On Site</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
          <input type="submit" value="Continue"></input>
        </form>
      </div>

    );
  }
}
