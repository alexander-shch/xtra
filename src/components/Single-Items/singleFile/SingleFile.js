import React from 'react';
import { SingleItem } from '../../global-style/SettingSection';
import DeleteButton from '../../My-button/delete-button/DeleteButton';
import DownLoadButton from '../../My-button/download-button/DownLoadButton';
import ViewButton from '../../My-button/viewFile-button/ViewButton';
const SingleFile = ({ downLoadFunction, item, deleteList }) => {
  let beforeDelete = deleteList ? deleteList.includes(item._id) : false;
  return (
    <SingleItem $opacity={beforeDelete}>
      <span className='itemName'>{item.name}</span>

      <div className='buttons'>
        <ViewButton item={item} />
        <DownLoadButton item={item} downLoadFunction={downLoadFunction} />
        <DeleteButton
          makeDisable={beforeDelete}
          item={item}
          addFunction={'deleteFile'}
        />
      </div>
    </SingleItem>
  );
};

export default SingleFile;
