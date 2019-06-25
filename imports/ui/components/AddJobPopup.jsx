import React from 'react';
import Popup from 'reactjs-popup';
import { FaPlus } from 'react-icons/fa';
import JobForm from './JobForm.jsx';

const AddJobPopup =  () => (
  <Popup
    trigger={<button style={btnStyle} className="button"> <FaPlus /> </button>}
    modal
    closeOnDocumentClick
  >
    <span><JobForm/></span>
  </Popup>
)


const btnStyle = {
  border: 'none',
}
export default AddJobPopup;
