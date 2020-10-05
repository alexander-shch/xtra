import React from 'react';
import { FlexContainer, PopUpContainer } from '../../../../../../component/global-style/popUpsStyle';
import TextArea from '../../../../../../component/inputs/text-area/TextArea';
import MyButton from '../../../../../../component/my-button/MyButton';
import { ButtonContainer } from '../../../../../../component/my-button/MyButton.style';

const CommentPopUp = ({ setNewCommentView, handleChange, noteSubmit }) => {
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
            <MyButton>אישור</MyButton>
            <MyButton
              type='button'
              onClick={() => setNewCommentView(false)}
              forgot
            >
              ביטול
            </MyButton>
          </ButtonContainer>
        </form>
      </PopUpContainer>
    </FlexContainer>
  );
};

export default CommentPopUp;
