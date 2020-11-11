import React from 'react';
import { SingleItem } from '../../global-style/SettingSection';
import DeleteButton from '../../My-button/delete-button/DeleteButton';
import DownLoadButton from '../../My-button/download-button/DownLoadButton';
import ViewButton from '../../My-button/viewFile-button/ViewButton';
const SingleFile = ({ item }) => {
  return (
    <SingleItem>
      <span className='itemName'>{item.name}</span>

      <div className='buttons'>
        <ViewButton item={item} />
        <DownLoadButton item={item} />
        <DeleteButton item={item} addFunction={'deleteFile'} />
      </div>
    </SingleItem>
  );
};

export default SingleFile;
