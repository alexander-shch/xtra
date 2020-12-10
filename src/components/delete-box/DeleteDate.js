import React from 'react';
import MyButton from '../My-button/MyButton';
import {
  FlexContainer,
  PopUpContainer,
  BoxHeader,
  BoxContent,
  ButtonContainer,
} from '../global-style/popUpsStyle';

const DeleteDate = ({ deleteItem, close, item, view }) => {
  return view ? (
    <FlexContainer>
      <PopUpContainer>
        <BoxHeader>
          <h5>מחיקה</h5>
        </BoxHeader>
        <BoxContent>
          <h4>האם אתה בטוח שברצונך למחוק?</h4>
          <span>{item.name}</span>
          <ButtonContainer>
            <MyButton onClick={() => deleteItem()}>אישור</MyButton>
            <MyButton onClick={() => close()} forgot>
              ביטול
            </MyButton>
          </ButtonContainer>
        </BoxContent>
      </PopUpContainer>
    </FlexContainer>
  ) : null;
};

export default DeleteDate;
