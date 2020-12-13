import React from 'react';
import { withRouter } from 'react-router-dom';
import OptionButton from '../../My-button/option-button/OptionButton';
import { SingleItem } from '../../global-style/SettingSection';
import DeleteButton from '../../My-button/delete-button/DeleteButton';

const SingleClass = ({ item, match, history, width }) => {
  let isMobile = width <= 800 ? true : false;
  return (
    <SingleItem>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>שם הבניין</span> : null}
        {item.building.name}
      </span>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>שם הכיתה</span> : null}
        {item.name}
      </span>

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
