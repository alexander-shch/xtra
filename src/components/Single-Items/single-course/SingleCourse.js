import React from 'react';
import { SingleItem } from '../../global-style/SettingSection';
import DeleteButton from '../../My-button/delete-button/DeleteButton';
import OptionButton from '../../My-button/option-button/OptionButton';
import { withRouter } from 'react-router-dom';

const SingleCourse = ({ item, match, history, categoriesObj, width }) => {
  let isMobile = width <= 800 ? true : false;
  const getCategoryName = () => {
    if (item.category && categoriesObj) {
      if (item.category in categoriesObj) {
        return categoriesObj[item.category];
      }
    } else {
      return 'לא משויך תחום';
    }
  };
  return (
    <SingleItem>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>שם הקורס</span> : null}
        {item.title}
      </span>
      <span className='itemName'>
        {isMobile ? <span className='mobileTitle'>תחום </span> : null}
        {getCategoryName()}
      </span>
      <div className='buttons'>
        <OptionButton
          onClick={() => history.push(`${match.path}/updateCourse/${item._id}`)}
          edit
        >
          &#9998;
        </OptionButton>
        <DeleteButton item={item} />
      </div>
    </SingleItem>
  );
};
export default withRouter(SingleCourse);
