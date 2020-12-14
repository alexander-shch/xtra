import React from 'react';
import MyButton from '../My-button/MyButton';
import {
  FlexContainer,
  PopUpContainer,
  BoxHeader,
  BoxContent,
  ButtonContainer,
} from '../global-style/popUpsStyle';

const DeleteBox = ({
  closeConfirmMessage,
  deleteFunction,
  confirmMessageData,
  pageID,
}) => {
  const { confirmMessageDisplay, itemToDelete } = confirmMessageData;

  const onDelete = async (deleteFunction, itemToDelete, pageID) => {
    try {
      if (pageID) {
        await deleteFunction(pageID, itemToDelete._id);
      } else {
        await deleteFunction(itemToDelete._id);
      }
    } catch (err) {
      console.log(err);
    } finally {
      closeConfirmMessage();
    }
  };

  return confirmMessageDisplay ? (
    <FlexContainer onClick={() => closeConfirmMessage()}>
      <PopUpContainer>
        <BoxHeader>
          <h5>מחיקה</h5>
        </BoxHeader>
        <BoxContent>
          <h4>האם אתה בטוח שברצונך למחוק?</h4>
          {/* <span>{item.name}</span> */}
          <ButtonContainer>
            <MyButton
              onClick={() => onDelete(deleteFunction, itemToDelete, pageID)}
            >
              אישור
            </MyButton>
            <MyButton onClick={() => closeConfirmMessage()} forgot>
              ביטול
            </MyButton>
          </ButtonContainer>
        </BoxContent>
      </PopUpContainer>
    </FlexContainer>
  ) : null;
};

export default DeleteBox;
