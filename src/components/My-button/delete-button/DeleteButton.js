import React from 'react';
import OptionButton from '../option-button/OptionButton';
import { deleteConfirmMessage } from '../../../Redux/on-delete/delete.action';
import { connect } from 'react-redux';

const DeleteButton = ({
  item,
  confirmMessageDisplay,
  deleteConfirmMessage,
  addFunction,
}) => {
  const handdleDeleteClick = (item) => {
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
      <OptionButton onClick={() => handdleDeleteClick(itemToDelete)} delete>
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
