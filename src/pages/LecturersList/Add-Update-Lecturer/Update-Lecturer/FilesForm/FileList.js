import React, { useState } from 'react';
import TableTop from '../../../../../components/Table-top/Tabletop';
import MyButton from '../../../../../components/My-button/MyButton';
import FilePopUp from './Popup/FilePopUp';
import SingleFile from '../../../../../components/Single-Items/singleFile/SingleFile';
import { downLoadFile } from '../../../../../Redux/Lectures/lectures.action';
const FilesLIst = ({ uploadCv, id, fileSpinner, files, deleteList }) => {
  const [filePopUpView, setFilePopUpView] = useState(false);

  const [cvFile, setCvFile] = useState({ cv: null });
  const { cv } = cvFile;

  const handleCvChange = (e) => {
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
          handleFileChange={handleCvChange}
          setFilePopUpView={setFilePopUpView}
          loading={fileSpinner}
        />
      ) : null}
      <MyButton onClick={() => setFilePopUpView(true)} addButtonStyle>
        הוסף קובץ
      </MyButton>
      <TableTop tableProps={['כותרת', 'אפשרויות']} />
      {files.length === 0 ? (
        <h3>אין קבצים</h3>
      ) : (
        files.map((item) => (
          <SingleFile
            deleteList={deleteList}
            downLoadFunction={downLoadFile}
            key={item._id}
            item={item}
            additionalData={{
              deleteFunctionString: 'deleteFile',
              id: id,
            }}
          />
        ))
      )}
    </>
  );
};

export default FilesLIst;
