import React from 'react';
import { withRouter } from 'react-router-dom';
import { SingleItem } from '../../global-style/settingSection';
import DeleteButton from '../../my-button/delete-button/deleteButton';
import OptionButton from '../../my-button/option-button/optionButton';

const BuildingItem = ({ match, history, item }) => {
  return (
    <SingleItem>
      <span className='itemName'>{item.name}</span>
      <div className='buttons'>
        <OptionButton
          onClick={() =>
            history.push(`${match.path}/updateBuilding/${item._id}`)
          }
          edit
        >
          &#9998;
        </OptionButton>
        <DeleteButton item={item} />
      </div>
    </SingleItem>
  );
};

export default withRouter(BuildingItem);
