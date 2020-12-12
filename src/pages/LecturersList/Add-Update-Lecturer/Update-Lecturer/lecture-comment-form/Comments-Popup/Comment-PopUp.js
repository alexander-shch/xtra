import React from 'react';
import TextArea from '../../../../../../components/inputs/text-area/TextArea';
import MyButton from '../../../../../../components/My-button/MyButton';

import {
  FlexContainer,
  PopUpContainer,
  ButtonContainer,
} from '../../../../../../components/global-style/popUpsStyle';

const CommentPopUp = ({
  setNewCommentView,
  handleChange,
  noteSubmit,
  loading,
}) => {
  return (
    <FlexContainer>
      <PopUpContainer padding>
        <form onSubmit={noteSubmit}>
          <TextArea
            name='text'
            type='text'
            label='הוסף הערה'
            hebrew='true'
            handleChange={handleChange}
          />
          <ButtonContainer>
            <MyButton
              type='button'
              onClick={() => setNewCommentView(false)}
              forgot
            >
              ביטול
            </MyButton>
            <MyButton save loading={loading}>
              אישור
            </MyButton>
          </ButtonContainer>
        </form>
      </PopUpContainer>
    </FlexContainer>
  );
};

export default CommentPopUp;
