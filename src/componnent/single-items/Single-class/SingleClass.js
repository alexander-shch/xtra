import React from 'react';
import { withRouter } from 'react-router-dom';
import OptionButton from '../../My-button/option-button/OptionButton';
import { SingleItem } from '../../global-style/SettingSection';

const SingleClass = ({ item, match, history, openBox }) => {
  return (
    <SingleItem>
      <span className='itemName'>{item.building.name}</span>
      <span className='itemName'>{item.name}</span>
      <div className='buttons'>
        <OptionButton
          onClick={() => history.push(`${match.path}/updateClass/${item._id}`)}
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

export default withRouter(SingleClass);
