import React from 'react';
import OptionButton from '../option-button/OptionButton';
import { deleteConfirmMessage } from '../../../Redux/on-delete/delete.action';
import { connect } from 'react-redux';

const DeleteButton = ({
  item,
  confirmMessageDisplay,
  deleteConfirmMessage,
}) => {
  const handdleDeleteClick = (item) => {
    if (confirmMessageDisplay) {
      return;
    } else {
      deleteConfirmMessage(item);
    }
  };

  return (
    <>
      <OptionButton onClick={() => handdleDeleteClick(item)} delete>
        &#10008;
      </OptionButton>
    </>
  );
};

const mapStateToProps = (state) => ({
  confirmMessageDisplay: state.delete.confirmMessageDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  deleteConfirmMessage: (item) => dispatch(deleteConfirmMessage(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);