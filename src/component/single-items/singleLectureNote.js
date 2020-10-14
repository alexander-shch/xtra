import React from 'react';
import { withRouter } from 'react-router-dom';
import { SingleItem } from '../global-style/SettingSection';
import DeleteButton from '../my-button/delete-button/DeleteButton';

const SingleLectureNote = ({ item }) => {
  return (
    <SingleItem>
      <p className='itemName'>{item.text}</p>
      <span className='itemName date'>{item.created.slice(0, 10)}</span>
      <div className='buttons'>
        <DeleteButton item={item} addFunction={'deleteNote'} />
      </div>
    </SingleItem>
  );
};

export default withRouter(SingleLectureNote);
