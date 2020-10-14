import React from 'react';
import { withRouter } from 'react-router-dom';
import OptionButton from '../../my-button/option-button/optionButton';
import { SingleItem } from '../../global-style/settingSection';
import DeleteButton from '../../my-button/delete-button/deleteButton';

const SingleClass = ({ item, match, history }) => {
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
        <DeleteButton item={item} />
      </div>
    </SingleItem>
  );
};

export default withRouter(SingleClass);