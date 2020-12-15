import React, { useState } from 'react';
import OptionButton from '../option-button/OptionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { viewFile } from '../../../utils/files.utiles';
const eyeView = <FontAwesomeIcon icon={faEye} />;
const spin = <FontAwesomeIcon icon={faSpinner} />;

const ViewButton = ({ item }) => {
  const [downLoadSpinner, setDownLoadSpinner] = useState(false);

  const supportedViewMime = [
    'image/jpeg',
    'application/pdf',
    'text/plain',
    'text/html',
    'image/png',
    'image/gif',
    'image/bmp',
    'image/x-icon',
    'image/png',
    'image/svg+xml',
  ];

  const canItOpen = !supportedViewMime.includes(item.mimetype) ? false : true;

  const startDownLoad = async (item) => {
    setDownLoadSpinner(true);
    try {
      await viewFile(item);
    } catch (err) {
      console.log(err);
    } finally {
      setDownLoadSpinner(false);
    }
  };

  return (
    <OptionButton
      onClick={canItOpen ? () => startDownLoad(item) : null}
      view={canItOpen}
      spin={downLoadSpinner}
    >
      {downLoadSpinner ? spin : eyeView}
    </OptionButton>
  );
};

export default ViewButton;
