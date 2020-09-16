import React, { useState } from 'react';
import TableTop from '../../../Table-top/Tabletop';
import MyButton from '../../../My-button/MyButton';

const CommentList = () => {
  const [newCommentview, setNewCommentView] = useState(false);

  return (
    <>
      <MyButton onClick={() => setNewCommentView(true)} addButtonStyle>
        הוסף הערה
      </MyButton>
      {newCommentview ? <h1>hi</h1> : null}
      <TableTop tableProps={['הערה', 'תאריך', 'אפשרויות']} />
    </>
  );
};

export default CommentList;
