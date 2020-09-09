import React from 'react';
import './DeleteBox.style.scss';
import MyButton from '../My-button/MyButton';

const DeleteBox = ({ delteItem, close, item }) => {
  return (
    <div className='flexContainer'>
      <div className='deleteBoxContainer'>
        <div className='boxHeader'>
          <h5>מחיקה</h5>
        </div>
        <div className='boxContent'>
          <h4>האם אתה בטוח שברצונך למחוק?</h4>
          <span>{item.name}</span>
          <div className='buttonsContainer'>
            <MyButton onClick={delteItem}>אישור</MyButton>
            <MyButton onClick={close} forgot>
              ביטול
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBox;
