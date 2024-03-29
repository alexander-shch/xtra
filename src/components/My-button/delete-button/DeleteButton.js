import React from 'react';
import OptionButton from '../option-button/OptionButton';
import { deleteConfirmMessage } from '../../../Redux/on-delete/delete.action';
import { connect } from 'react-redux';

const DeleteButton = ({
  item,
  confirmMessageDisplay,
  deleteConfirmMessage,
  addFunction,
  additionalData,
}) => {
  const handleDeleteClick = (item) => {
    if (confirmMessageDisplay) {
      return;
    } else {
      deleteConfirmMessage(item);
    }
  };
  const itemToDelete = additionalData
    ? {
        ...item,
        addFunction: additionalData.deleteFunctionString,
        pageID: additionalData.id,
      }
    : item;
  return (
    <>
      <OptionButton onClick={() => handleDeleteClick(itemToDelete)} delete>
        &#10008;
      </OptionButton>
    </>
  );
};

const mapStateToProps = (state) => ({
  confirmMessageDisplay: state.delete.confirmMessageDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  deleteConfirmMessage: (itemToDelete) =>
    dispatch(deleteConfirmMessage(itemToDelete)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
