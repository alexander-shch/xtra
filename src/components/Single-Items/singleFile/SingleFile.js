import React from 'react';
import { SingleItem } from '../../global-style/SettingSection';
import DeleteButton from '../../My-button/delete-button/DeleteButton';
import DownLoadButton from '../../My-button/download-button/DownLoadButton';
import ViewButton from '../../My-button/viewFile-button/ViewButton';
import DisableOverlay from '../../disable-overlay/DisableOverlay';

const SingleFile = ({ downLoadFunction, item, deleteList, additionalData }) => {
  let beforeDelete = deleteList ? deleteList.includes(item._id) : false;
  let itemName = item.name.substring(item.name.indexOf('_') + 1);
  return (
    <>
      <SingleItem $opacity={beforeDelete}>
        <DisableOverlay disable={beforeDelete} />
        <span className='itemName'>{itemName}</span>
        <div className='buttons'>
          <ViewButton item={item} />
          <DownLoadButton item={item} downLoadFunction={downLoadFunction} />
          <DeleteButton item={item} additionalData={additionalData} />
        </div>
      </SingleItem>
    </>
  );
};

export default SingleFile;
