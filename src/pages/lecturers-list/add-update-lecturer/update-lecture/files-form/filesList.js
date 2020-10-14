import React, { useState } from 'react';
import FilePopUp from './filePopup';
import MyButton from '../../../../../component/my-button/button';
import TableTop from '../../../../../component/table-top/Tabletop';
import DataSpinner from '../../../../../component/spinner/dataSpinner/dataSpinner';
import SingleFile from '../../../../../component/single-items/single-file/single-file';

const FilesLIst = ({ uploadCv, id, singleLecture, fileSpinner }) => {
  const fileArr = singleLecture.files;
  const [filePopUpView, setFilePopUpView] = useState(false);

  const [cvFile, setCvFile] = useState({ cv: null });
  const { cv } = cvFile;

  const handleCvChange = (e) => {
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
          handleFileChange={handleCvChange}
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