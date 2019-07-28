import React from 'react';
import Popup from 'reactjs-popup';
import { FaPlus } from 'react-icons/fa';

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
