import React, { useState } from 'react';
import OptionButton from '../option-button/OptionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { downLoadFile } from '../../../Redux/Lectures/lectures.action';
const download = <FontAwesomeIcon icon={faDownload} />;
const spin = <FontAwesomeIcon icon={faSpinner} />;

const DownLoadButton = ({ item }) => {
  const [downLoadSpinner, setDownLoadSpinner] = useState(false);

  const startDownLoad = async (item) => {
    setDownLoadSpinner(true);
    try {
      await downLoadFile(item);
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
