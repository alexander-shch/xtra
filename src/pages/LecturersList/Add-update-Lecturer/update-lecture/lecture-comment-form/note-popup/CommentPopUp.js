import React from 'react';
import TextArea from '../../../../../../component/inputs/text-area/TextArea';
import MyButton from '../../../../../../component/my-button/MyButton';
import {
  FlexContainer,
  PopUpContainer,
  ButtonContainer,
} from '../../../../../../component/global-style/popUpsStyle';

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
