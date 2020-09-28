import React from 'react';
import TableTop from '../../../Table-top/Tabletop';
import MyButton from '../../../My-button/MyButton';

const FilesLIst = () => {
  return (
    <>
      <MyButton addButtonStyle>הוסף קובץ</MyButton>
      <TableTop tableProps={['כותרת', 'תוקף', 'אפשרויות']} />
    </>
  );
};

export default FilesLIst;
