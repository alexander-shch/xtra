import React from 'react';
import OptionButton from '../../My-button/option-button/OptionButton';
import { withRouter } from 'react-router-dom';
import { SingleItem } from '../../global-style/SettingSection';

const BuildingItem = ({ match, history, item, openBox }) => {
  return (
    <SingleItem>
      <span className='itemName'>{item.name}</span>
      <div className='buttons'>
        <OptionButton
          onClick={() =>
            history.push(`${match.path}/updateBulding/${item._id}`)
          }
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

export default withRouter(BuildingItem);
