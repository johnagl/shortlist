import React from 'react';
import Popup from 'reactjs-popup';
import { FaPlus } from 'react-icons/fa';
import AddJobForm from './AddJobForm.jsx'

const AddJobPopup =  () => (
  <Popup
    trigger={<button style={btnStyle} className="button"> <FaPlus /> </button>}
    modal
    closeOnDocumentClick
  >
    <span><AddJobForm/></span>
  </Popup>
)


const btnStyle = {
  border: 'none',
}
export default AddJobPopup;
