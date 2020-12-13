import React from 'react';
import OptionButton from '../../My-button/option-button/OptionButton';
import { SingleItem } from '../../global-style/SettingSection';
import { withRouter } from 'react-router-dom';
import DeleteButton from '../../My-button/delete-button/DeleteButton';

const SingleLecture = ({ match, history, item, width }) => {
  let isMobile = width <= 800 ? true : false;
  return (
    <SingleItem>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>שם המרצה</span> : null}
        {item.name}
      </span>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>טלפון </span> : null}
        {item.phone}
      </span>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>מייל </span> : null}
        {item.email}
      </span>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>שכר שעתי</span> : null}
        {item.hourlyRate}
      </span>
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
