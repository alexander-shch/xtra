import React from 'react';
import OptionButton from '../../My-button/option-button/OptionButton';
import { withRouter } from 'react-router-dom';
import { SingleItem } from '../../global-style/SettingSection';
import DeleteButton from '../../My-button/delete-button/DeleteButton';
import DisableOverlay from '../../disable-overlay/DisableOverlay';

const SingleCategory = ({ match, history, item, ...otherProps }) => {
  let beforeDelete = otherProps.deleteList
    ? otherProps.deleteList.includes(item._id)
    : false;
  return (
    <SingleItem $opacity={beforeDelete}>
      <DisableOverlay disable={beforeDelete} />
      <span className='itemName'>{item.title}</span>
      <div className='buttons'>
        <OptionButton
          onClick={() =>
            history.push(`${match.path}/updateCategory/${item._id}`)
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

export default withRouter(SingleCategory);
