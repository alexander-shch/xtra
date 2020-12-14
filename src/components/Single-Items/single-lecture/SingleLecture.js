import React from 'react';
import OptionButton from '../../My-button/option-button/OptionButton';
import { SingleItem } from '../../global-style/SettingSection';
import { withRouter } from 'react-router-dom';
import DeleteButton from '../../My-button/delete-button/DeleteButton';
import DisableOverlay from '../../disable-overlay/DisableOverlay';

const SingleLecture = ({ match, history, item, width, ...otherProps }) => {
  let beforeDelete = otherProps.deleteList
    ? otherProps.deleteList.includes(item._id)
    : false;
  let isMobile = width <= 800 ? true : false;
  return (
    <SingleItem $opacity={beforeDelete}>
      <DisableOverlay disable={beforeDelete} />
      <span className='itemName'>{item.name}</span>
      {!isMobile ? (
        <>
          <span className='itemName'>{item.phone}</span>
          <span className='itemName'>{item.email}</span>
          <span className='itemName'>{item.hourlyRate}</span>
        </>
      ) : null}
      <div className='buttons'>
        <OptionButton
          onClick={() =>
            history.push(`${match.path}/updateLecture/${item._id}`)
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

export default withRouter(SingleLecture);
