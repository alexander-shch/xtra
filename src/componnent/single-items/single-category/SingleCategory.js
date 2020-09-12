import React from 'react';
import OptionButton from '../../My-button/option-button/OptionButton';
import { withRouter } from 'react-router-dom';
import { SingleItem } from '../../global-style/SettingSection';

const SingleCategory = ({ match, history, item, openBox }) => {
  return (
    <SingleItem>
      <span className='itemName'>{item.title}</span>
      <div className='buttons'>
        <OptionButton
          onClick={() => history.push(`${match.path}/updateCategory`, item)}
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

export default withRouter(SingleCategory);
