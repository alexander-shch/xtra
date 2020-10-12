import React from 'react';
import {
  FlexContainer,
  PopUpContainer,
  ButtonContainer,
} from '../../../../../../componnent/global-style/popUpsStyle';
import InputField from '../../../../../../componnent/inputes/input-field/InputField';
import MyButton from '../../../../../../componnent/My-button/MyButton';

const FilePopUp = ({
  handdleFileChange,
  setFilePopUpView,
  cvSubmit,
  loading,
}) => {
  return (
    <FlexContainer>
      <PopUpContainer padding>
        <InputField
          name='fileName'
          type='file'
          label='בחר קובץ'
          handleChange={handdleFileChange}
          hebrew='true'
          required
        />

        <ButtonContainer>
          <MyButton onClick={() => cvSubmit()} save loading={loading}>
            העלה קובץ
          </MyButton>
          <MyButton
            type='button'
            onClick={() => setFilePopUpView(false)}
            forgot
          >
            סגור
          </MyButton>
        </ButtonContainer>
      </PopUpContainer>
    </FlexContainer>
  );
};

export default FilePopUp;
