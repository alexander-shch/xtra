import React from 'react';
import OptionButton from '../My-button/option-button/OptionButton';
import { withRouter } from 'react-router-dom';
import { SingleItem } from '../global-style/SettingSection';

const SingleLectureNote = ({ item, openBox }) => {
  return (
    <SingleItem>
      <p className='itemName'>{item.text}</p>
      <span className='itemName date'>{item.created.slice(0, 10)}</span>
      <div className='buttons'>
        <OptionButton onClick={() => openBox(item)} delete>
          &#10008;
        </OptionButton>
      </div>
    </SingleItem>
  );
};

export default withRouter(SingleLectureNote);
