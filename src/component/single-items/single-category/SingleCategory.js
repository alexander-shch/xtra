import React from 'react';
import OptionButton from '../../my-button/option-button/optionButton';
import { withRouter } from 'react-router-dom';
import { SingleItem } from '../../global-style/settingSection';
import DeleteButton from '../../my-button/delete-button/deleteButton';

const SingleCategory = ({ match, history, item }) => {
  return (
    <SingleItem>
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
