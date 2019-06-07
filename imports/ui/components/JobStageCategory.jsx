import React, { Component } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Popup from 'reactjs-popup';
import AddJobPopup from './AddJobPopup.jsx'


export default class JobStageCategory extends Component {
  onSubmit = () => {
    console.log('testing')
  }

  render() {
    const Menu =  () => (
  <div className="menu">
    <Popup
      trigger={<div className="menu-item"><FaArrowDown size={20}/></div>}
      position="bottom"
      on="hover"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: '0px', border: 'none' }}
      arrow={false}
    >
      <div className="menu">
        <div className="menu-item"> Wishlist </div>
        <div className="menu-item"> Applied </div>
        <div className="menu-item"> Phone </div>
        <div className="menu-item"> On Site </div>
        <div className="menu-item"> Offer </div>
        <div className="menu-item"> Rejected </div>
      </div>
    </Popup>
  </div>
)
    return (
      <div style= {JobStageCategoryStyle}>
        <FaEllipsisH style = { ellipsis } size = { 20 } />
        <h1 onMouseEnter={this.onSubmit} onMouseLeave={this.onSubmit} style ={descriptionStyle}> Wishlist <AddJobPopup / ></h1>

        <Menu style={downArrow}/>

      </div>
    );
  }
}
// <FaArrowDown style={downArrow} onClick={this.onSubmit} size = {24}/>
// <div style={downArrow}></div>

const JobStageCategoryStyle = {
  position: 'relative',
  backgroundColor: '#f9f9f9',
  fontSize: '12px',
  width: '275px',
  height: '125px',
  textAlign: 'center',
  margin: 'auto',
  padding: '10px',
}

const descriptionStyle = {
  color: '#625757',
  paddingBottom: '30px'
}

const plus = {
  color: '#625757',
  margin: 'auto',
  position: 'absolute',
  right: '75px',
  top: '29px'
}

const downArrow = {
  color: '#625757',
  position: 'absolute',
  bottom: '20px'

}

const ellipsis = {
  color: '#625757',
  position: 'absolute',
  right: '20px',
  paddingBottom: '20px'
}
