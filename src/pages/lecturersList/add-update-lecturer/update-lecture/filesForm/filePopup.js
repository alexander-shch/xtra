import React from 'react';
import {
  FlexContainer,
  PopUpContainer,
  ButtonContainer,
} from '../../../../../component/global-style/popUpsStyle';
import InputField from '../../../../../component/inputs/input-field/InputField';
import MyButton from '../../../../../component/my-button/MyButton';

const FilePopUp = ({ handleFileChange, setFilePopUpView, cvSubmit }) => {
  return (
    <FlexContainer>
      <PopUpContainer padding>
        <InputField
          name='fileName'
          type='file'
          label='בחר קובץ'
          handleChange={handleFileChange}
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
