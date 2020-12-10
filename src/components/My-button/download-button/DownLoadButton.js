import React, { useState } from 'react';
import OptionButton from '../option-button/OptionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSpinner } from '@fortawesome/free-solid-svg-icons';
const download = <FontAwesomeIcon icon={faDownload} />;
const spin = <FontAwesomeIcon icon={faSpinner} />;

const DownLoadButton = ({ item, downLoadFunction }) => {
  const [downLoadSpinner, setDownLoadSpinner] = useState(false);

  const startDownLoad = async (item) => {
    setDownLoadSpinner(true);
    try {
      await downLoadFunction(item);
    } catch (err) {
      console.log(err);
    } finally {
      setDownLoadSpinner(false);
    }
  };

  return (
    <OptionButton
      onClick={() => startDownLoad(item)}
      download
      spin={downLoadSpinner}
    >
      {downLoadSpinner ? spin : download}
    </OptionButton>
  );
};

export default DownLoadButton;
