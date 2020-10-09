import React, { useState } from 'react';
import TableTop from '../../../../../component/table-top/Tabletop';
import MyButton from '../../../../../component/my-button/MyButton';
import FilePopUp from './file-popup/filePopup';

const FilesLIst = ({ handleCvChange, cvSubmit }) => {
  const [filePopUpView, setFilePopUpView] = useState(false);

  return (
    <>
      {filePopUpView ? (
        <FilePopUp
          cvSubmit={cvSubmit}
          handleFileChange={handleCvChange}
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
