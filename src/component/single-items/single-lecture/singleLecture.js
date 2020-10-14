import React from 'react';
import OptionButton from '../../my-button/option-button/optionButton';
import { SingleItem } from '../../global-style/settingsSection';
import { withRouter } from 'react-router-dom';
import DeleteButton from '../../my-button/delete-button/deleteBtn';

const SingleLecture = ({ match, history, item }) => {
  return (
    <SingleItem>
      <span className='itemName'>{item.name}</span>
      <span className='itemName'>{item.phone}</span>
      <span className='itemName'>{item.email}</span>
      <span className='itemName'>{item.hourlyRate}</span>
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
