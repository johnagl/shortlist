import React from 'react';
import Popup from 'reactjs-popup';
import { FaPlus } from 'react-icons/fa';
import JobForm from './JobForm.jsx';

const EditJobPopup =  () => (
  <Popup
    trigger={<button className="button"> <FaPlus /> </button>}
    modal
    closeOnDocumentClick
  >
    <span></span>
  </Popup>
)
export default EditJobPopup;
