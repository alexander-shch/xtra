import React from 'react';
import {
  FlexContainer,
  PopUpContainer,
  ButtonContainer,
} from '../../../../../../components/global-style/popUpsStyle';
import InputField from '../../../../../../components/inputs/input-field/InputField';
import MyButton from '../../../../../../components/My-button/MyButton';

const FilePopUp = ({
  handleFileChange,
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
          handleChange={handleFileChange}
          hebrew='true'
          required
        />

        <ButtonContainer>
          <MyButton
            type='button'
            onClick={() => setFilePopUpView(false)}
            forgot
          >
            סגור
          </MyButton>
          <MyButton onClick={() => cvSubmit()} save loading={loading}>
            העלה קובץ
          </MyButton>
        </ButtonContainer>
      </PopUpContainer>
    </FlexContainer>
  );
};

export default FilePopUp;
