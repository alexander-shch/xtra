import React, { useState } from 'react';
import TableTop from '../../../../../componnent/table-top/Tabletop';
import MyButton from '../../../../../componnent/My-button/MyButton';
import FilePopUp from './File-PopUp/FilePopUp';

const FilesLIst = ({ handdleCvChange, cvSubmit }) => {
  const [filePopUpView, setFilePopUpView] = useState(false);

  return (
    <>
      {filePopUpView ? (
        <FilePopUp
          cvSubmit={cvSubmit}
          handdleFileChange={handdleCvChange}
          setFilePopUpView={setFilePopUpView}
        />
      ) : null}

      <MyButton onClick={() => setFilePopUpView(true)} addButtonStyle>
        הוסף קובץ
      </MyButton>
      <TableTop tableProps={['כותרת', 'תוקף', 'אפשרויות']} />
    </>
  );
};

export default FilesLIst;
