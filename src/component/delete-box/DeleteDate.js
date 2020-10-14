import React from 'react';
import MyButton from '../my-button/button';
import {
  FlexContainer,
  PopUpContainer,
  BoxHeader,
  BoxContent,
  ButtonContainer,
} from '../global-style/popUpsStyle';

const DeleteDate = ({ delteItem, close, item }) => {
  return (
    <FlexContainer>
      <PopUpContainer>
        <BoxHeader>
          <h5>מחיקה</h5>
        </BoxHeader>
        <BoxContent>
          <h4>האם אתה בטוח שברצונך למחוק?</h4>
          <span>{item.name}</span>
          <ButtonContainer>
            <MyButton onClick={() => delteItem()}>אישור</MyButton>
            <MyButton onClick={() => close()} forgot>
              ביטול
            </MyButton>
          </ButtonContainer>
        </BoxContent>
      </PopUpContainer>
    </FlexContainer>
  );
};

export default DeleteDate;
