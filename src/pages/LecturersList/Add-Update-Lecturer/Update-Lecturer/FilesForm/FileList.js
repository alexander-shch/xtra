import React, { useState } from 'react';
import TableTop from '../../../../../components/Table-top/Tabletop';
import MyButton from '../../../../../components/My-button/MyButton';
import FilePopUp from './Popup/FilePopUp';
import SingleFile from '../../../../../components/Single-Items/singleFile/SingleFile';
import DataSpinner from '../../../../../components/spinner/DataSpinner/DataSpiner';

const FilesLIst = ({ uploadCv, id, singleLecture, fileSpinner }) => {
  const fileArr = singleLecture.files;
  const [filePopUpView, setFilePopUpView] = useState(false);

  const [cvFile, setCvFile] = useState({ cv: null });
  const { cv } = cvFile;

  const handdleCvChange = (e) => {
    const { files } = e.target;
    setCvFile({ cv: files });
  };

  const cvSubmit = async () => {
    if (!cv) {
      return;
    } else {
      let formData = new FormData();
      formData.append('file', cv[0]);
      try {
        await uploadCv(id, formData);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {filePopUpView ? (
        <FilePopUp
          cvSubmit={cvSubmit}
          handdleFileChange={handdleCvChange}
          setFilePopUpView={setFilePopUpView}
          loading={fileSpinner}
        />
      ) : null}
      <MyButton onClick={() => setFilePopUpView(true)} addButtonStyle>
        הוסף קובץ
      </MyButton>
      <TableTop tableProps={['כותרת', 'אפשרויות']} />
      {fileSpinner ? (
        <DataSpinner linesNum={fileArr.length} />
      ) : fileArr.length === 0 ? (
        <h3>אין קבצים</h3>
      ) : (
        fileArr.map((item) => <SingleFile key={item._id} item={item} />)
      )}
    </>
  );
};

export default FilesLIst;
