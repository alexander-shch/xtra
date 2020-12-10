import React from 'react';
import OptionButton from '../../My-button/option-button/OptionButton';
import { SingleItem } from '../../global-style/SettingSection';
import { withRouter } from 'react-router-dom';
import DeleteButton from '../../My-button/delete-button/DeleteButton';
import { alertIcon } from '../../../utils/fontAwesome';
const SingleCoupon = ({ match, history, item }) => {
  const setDate = (item) => {
    let date = new Date(item);
    let day = date.getDate();
    let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let year = date.getFullYear();
    return `${day}/${month[date.getMonth()]}/${year}`;
  };

  let date = item.effectiveTo ? setDate(item.effectiveTo) : 'לא מצוין תאריך';
  let title = item.title ? item.title : 'ללא כותרת';
  let isPercent = item.isPercent ? 'כן' : 'לא';
  let isCouponExpired =
    item.effectiveTo && new Date() > new Date(item.effectiveTo) ? true : false;

  return (
    <SingleItem>
      <span className={`itemName ${isCouponExpired ? 'expired' : ''}`}>
        {date}
        <span title={'פג תוקף'}>{isCouponExpired ? alertIcon : ''} </span>
      </span>
      <span className='itemName'>{title}</span>
      <span className='itemName'>{item.code}</span>
      <span className='itemName'>{item.discount}</span>
      <span className='itemName'>{isPercent}</span>
      <div className='buttons'>
        <OptionButton
          onClick={() => history.push(`${match.path}/updateCoupon/${item._id}`)}
          edit
        >
          &#9998;
        </OptionButton>
        <DeleteButton item={item} />
      </div>
    </SingleItem>
  );
};

export default withRouter(SingleCoupon);
