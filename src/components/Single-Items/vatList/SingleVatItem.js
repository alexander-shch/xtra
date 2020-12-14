import React from 'react';
import { SingleItem } from '../../global-style/SettingSection';
import OptionButton from '../../My-button/option-button/OptionButton';
import { withRouter } from 'react-router-dom';
import DeleteButton from '../../My-button/delete-button/DeleteButton';
import DisableOverlay from '../../disable-overlay/DisableOverlay';

const SingleVatItem = ({ item, match, history, width, ...otherProps }) => {
  let beforeDelete = otherProps.deleteList
    ? otherProps.deleteList.includes(item._id)
    : false;
  let isMobile = width <= 800 ? true : false;
  const BooleanToHebrew = item.vat ? 'כן' : 'לא';
  return (
    <SingleItem $opacity={beforeDelete}>
      <DisableOverlay disable={beforeDelete} />
      <span className='itemName'>{item.title}</span>
      {!isMobile ? (
        <>
          <span className='itemName'>{item.duplicate}</span>
          <span className='itemName'>{BooleanToHebrew}</span>
        </>
      ) : null}
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
