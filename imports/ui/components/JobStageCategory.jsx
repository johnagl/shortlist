import React, { Component } from 'react';

export default class JobStageCategory extends Component {
  onSubmit = () => {
    console.log('testing')
  }


  render() {
    return (
      <div style= {JobStageCategoryStyle}>
        <h1 style ={descriptionStyle}> Wishlist</h1>
        <button onClick={this.onSubmit} style={btnStyle}><div style={downArrow}></div></button>
      </div>
    );
  }
}

// <div style={downArrow}></div>

const JobStageCategoryStyle = {
  backgroundColor: '#f9f9f9',
  fontSize: '12px',
  width: '300px',
  height: '150px',
  textAlign: 'center'
}

const descriptionStyle = {
  fontColor: '#625757'
}

const downArrow = {
  width: '0',
  height: '0',
  borderLeft: '20px solid transparent',
  borderRight: '20px solid transparent',
  borderTop: '20px solid #625757'
}

const btnStyle = {
  border: 'none',
  backgroundColor: '#f9f9f9'

}
