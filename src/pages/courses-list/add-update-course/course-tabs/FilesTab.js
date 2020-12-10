import React, { useState } from 'react';
import { Flex } from '../../../../components/global-style/formsStyle';
import InputField from '../../../../components/inputs/input-field/InputField';
import MyButton from '../../../../components/My-button/MyButton';
import SingleFile from '../../../../components/Single-Items/singleFile/SingleFile';
import TableTop from '../../../../components/Table-top/Tabletop';

const FilesTab = ({ courseID, uploadCourseFile, filesList }) => {
  const [fileToUpload, setFileToUpload] = useState({ file: null });
  console.log(filesList);
  const handleFileChange = (e) => {
    const { files } = e.target;
    setFileToUpload({ file: files });
  };
  const { file } = fileToUpload;
  const fileSubmit = async () => {
    if (!file) {
      return;
    } else {
      let formData = new FormData();
      formData.append('file', file[0]);
      try {
        await uploadCourseFile(courseID, formData);
      } catch (err) {
        console.log(err);
      } finally {
        setFileToUpload({ file: null });
      }
    }
  };

  return (
    <>
      <Flex>
        <InputField
          name='fileName'
          type='file'
          label='בחר קובץ'
          handleChange={handleFileChange}
          hebrew='true'
          required
        />
        <MyButton onClick={() => fileSubmit()} type='button'>
          העלה קובץ
        </MyButton>
      </Flex>
      <TableTop tableProps={['כותרת', 'אפשרויות']} />

      {filesList.map((item) => {
        return (
          <SingleFile
            // downLoadFunction={downLoadCourseFile}
            key={item._id}
            item={item}
          />
        );
      })}
    </>
  );
};

export default FilesTab;
