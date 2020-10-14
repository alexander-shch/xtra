import React from 'react';
import { SingleItem } from '../../global-style/settingSection';
import DeleteButton from '../../my-button/delete-button/deleteBtn';
import DownLoadButton from '../../my-button/download-button/downLoadButton';

const SingleFile = ({ item }) => {
  return (
    <SingleItem>
      <span className='itemName'>{item.name}</span>

      <div className='buttons'>
        <DownLoadButton item={item} />
        <DeleteButton item={item} addFunction={'deleteFile'} />
      </div>
    </SingleItem>
  );
};

export default SingleFile;
