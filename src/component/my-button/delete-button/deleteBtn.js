import React from 'react';
import OptionButton from '../option-button';
import { deleteConfirmMessage } from '../../../redux/on-delete/delete.action';
import { connect } from 'react-redux';

const DeleteButton = ({
  item,
  confirmMessageDisplay,
  deleteConfirmMessage,
  addFunction,
}) => {
  const handleDeleteClick = (item) => {
    if (confirmMessageDisplay) {
      return;
    } else {
      deleteConfirmMessage(item);
    }
  };
  const itemToDelete = addFunction
    ? { ...item, addFunction: addFunction }
    : item;
  return (
    <>
      <OptionButton onClick={() => handleDeleteClick(item)} delete>
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
