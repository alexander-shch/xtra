import React from 'react';
import { SingleItem } from '../../global-style/SettingSection';
import OptionButton from '../../My-button/option-button/OptionButton';
import { withRouter } from 'react-router-dom';
import DeleteButton from '../../My-button/delete-button/DeleteButton';

const SingleVatItem = ({ item, match, history, width }) => {
  let isMobile = width <= 800 ? true : false;
  const BooleanToHebrew = item.vat ? 'כן' : 'לא';
  return (
    <SingleItem>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>כותרת </span> : null}
        {item.title}
      </span>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>מכפיל שכר </span> : null}
        {item.duplicate}
      </span>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>כולל מעמ </span> : null}
        {BooleanToHebrew}
      </span>
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
