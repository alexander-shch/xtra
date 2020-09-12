import React from 'react';
import { SingleItem } from '../../global-style/SettingSection';
import OptionButton from '../../My-button/option-button/OptionButton';
import { withRouter } from 'react-router-dom';

const SingleVatItem = ({ item, match, history, openBox }) => {
  const BooleanToHebrew = item.vat ? 'כן' : 'לא';
  return (
    <SingleItem>
      <span className='itemName'>{item.title}</span>
      <span className='itemName'>{item.duplicate}</span>
      <span className='itemName'>{BooleanToHebrew}</span>
      <div className='buttons'>
        <OptionButton
          onClick={() => history.push(`${match.path}/updateVatItem`, item)}
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

export default withRouter(SingleVatItem);
