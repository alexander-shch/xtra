import React from 'react';
import OptionButton from '../option-button/OptionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { downLoadFile } from '../../../Redux/Lectures/lectures.action';
const download = <FontAwesomeIcon icon={faDownload} />;
const spin = <FontAwesomeIcon icon={faSpinner} />;

const DownLoadButton = ({ item, downLoadSpinner, downLoadFile }) => {
  return (
    <OptionButton
      onClick={() => downLoadFile(item)}
      download
      spin={downLoadSpinner ? true : false}
    >
      {downLoadSpinner ? spin : download}
    </OptionButton>
  );
};

const mapStateToProps = (state) => ({
  downLoadSpinner: state.lectures.downLoadSpinner,
});

const mapDispatchToProps = (dispatch) => ({
  downLoadFile: (item) => dispatch(downLoadFile(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DownLoadButton);
