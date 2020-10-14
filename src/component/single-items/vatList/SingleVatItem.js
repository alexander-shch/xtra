import React from 'react';
import { SingleItem } from '../../global-style/settingSection';
import OptionButton from '../../my-button/option-button/optionButton';
import { withRouter } from 'react-router-dom';
import DeleteButton from '../../my-button/delete-button/deleteButton';

const SingleVatItem = ({ item, match, history }) => {
  const BooleanToHebrew = item.vat ? 'כן' : 'לא';
  return (
    <SingleItem>
      <span className='itemName'>{item.title}</span>
      <span className='itemName'>{item.duplicate}</span>
      <span className='itemName'>{BooleanToHebrew}</span>
      <div className='buttons'>
        <OptionButton
          onClick={() =>
            history.push(`${match.path}/updateVatItem/${item._id}`)
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

export default withRouter(SingleVatItem);
