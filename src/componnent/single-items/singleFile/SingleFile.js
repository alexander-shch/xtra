import React from 'react';
import { SingleItem } from '../../global-style/SettingSection';
import DeleteButton from '../../My-button/delete-button/DeleteButton';
import OptionButton from '../../My-button/option-button/OptionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const download = <FontAwesomeIcon icon={faDownload} />;

const SingleFile = ({ item }) => {
  return (
    <SingleItem>
      <span className='itemName'>{item.name}</span>

      <div className='buttons'>
        <OptionButton download>{download}</OptionButton>
        <DeleteButton item={item} addFunction={'deleteFile'} />
      </div>
    </SingleItem>
  );
};

export default SingleFile;
