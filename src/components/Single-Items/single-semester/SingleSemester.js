import React from 'react';
import OptionButton from '../../My-button/option-button/OptionButton';
import { withRouter } from 'react-router-dom';
import { SingleItem } from '../../global-style/SettingSection';
import DeleteButton from '../../My-button/delete-button/DeleteButton';

const SingleSemester = ({ match, history, item, width }) => {
  let isMobile = width <= 800 ? true : false;
  let formatDate = new Date(item.startDate).toLocaleDateString();
  return (
    <SingleItem>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>תאריך התחלה </span> : null}
        {formatDate}
      </span>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>כותרת </span> : null}
        {item.name}
      </span>
      <div className='buttons'>
        <OptionButton
          onClick={() =>
            history.push(`${match.path}/updateSemester/${item._id}`)
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

export default withRouter(SingleSemester);
