import React from 'react';
import {
  BoxContent,
  BoxHeader,
  FlexContainer,
  PopUpContainer,
  ButtonContainer,
} from '../global-style/popUpsStyle';
import MyButton from '../My-button/MyButton';

const CustomAlert = ({ alertView, onConfirm, closeAlert, alertText }) => {
  return alertView ? (
    <FlexContainer>
      <PopUpContainer>
        <BoxHeader>
          <h5>{alertText.title}</h5>
        </BoxHeader>
        <BoxContent>
          <h4>{alertText.heading}</h4>
          <span> {alertText.span}</span>
          <ButtonContainer>
            <MyButton onClick={() => onConfirm()}>אישור</MyButton>
            <MyButton onClick={() => closeAlert()} forgot>
              ביטול
            </MyButton>
          </ButtonContainer>
        </BoxContent>
      </PopUpContainer>
    </FlexContainer>
  ) : null;
};

export default CustomAlert;
