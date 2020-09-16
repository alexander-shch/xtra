import React from 'react';
import OptionButton from '../../My-button/option-button/OptionButton';
import { SingleItem } from '../../global-style/SettingSection';
import { withRouter } from 'react-router-dom';
const SingleLecture = ({ match, history, item, openBox }) => {
  return (
    <SingleItem>
      <span className='itemName'>{item.name}</span>
      <span className='itemName'>{item.phone}</span>
      <span className='itemName'>{item.email}</span>
      <span className='itemName'>{item.hourlyRate}</span>
      <div className='buttons'>
        <OptionButton
          onClick={() => history.push(`${match.path}/updateLecture`, item)}
          edit
        >
          &#9998;
        </OptionButton>
        <OptionButton onClick={() => openBox(item)} delete>
          &#10008;
        </OptionButton>
      </div>
    </SingleItem>
  );
};

export default withRouter(SingleLecture);
