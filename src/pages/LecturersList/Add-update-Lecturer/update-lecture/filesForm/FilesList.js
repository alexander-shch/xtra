import React, { useState } from 'react';
import TableTop from '../../../../../componnent/table-top/Tabletop';
import MyButton from '../../../../../componnent/My-button/MyButton';
import FilePopUp from './File-PopUp/FilePopUp';

const FilesLIst = ({ uploadCv, id }) => {
  const [filePopUpView, setFilePopUpView] = useState(false);

  const [cvFile, setCvFile] = useState({ cv: null });
  const { cv } = cvFile;

  const handdleCvChange = (e) => {
    const { files } = e.target;
    setCvFile({ cv: files });
  };

  const cvSubmit = async () => {
    let formData = new FormData();
    formData.append('file', cv[0]);
    try {
      await uploadCv(id, formData);
    } catch (err) {
      console.log(err);
    }
  };

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
