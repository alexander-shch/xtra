import React, { useState } from 'react';
import './avatarForm.style.scss';
import MyButton from '../../../../../components/My-button/MyButton';
import Spinner from '../../../../../components/spinner/Spinner';
import styled from 'styled-components';
import { isImage } from '../../../lecturesUtils/lectureUtils';

const AvatarImg = styled.div`
  height: 150px;
  width: 150px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;

const ImgPlaceHolder = styled.div`
  height: 150px;
  width: 150px;
`;

const AvatarForm = ({ singleLecture, avatarLoading, id, setAvatarImg }) => {
  const [imgFile, setImgFile] = useState({ img: null });
  const { img } = imgFile;

  const handdleImgChange = (e) => {
    const { files } = e.target;
    setImgFile({ img: files });
  };

  const imgSubmit = async () => {
    if (!img) {
      return;
    }
    if (!isImage(img[0].name)) {
      console.log('bad Format');
      return;
    }
    let fromData = new FormData();
    fromData.append('file', img[0]);
    try {
      await setAvatarImg(id, fromData);
    } catch (err) {
      console.log(err);
    }
  };

  const avatarImg = singleLecture.avatar
    ? `http://localhost:3005/uploads/${singleLecture.avatar.name}`
    : 'https://via.placeholder.com/150';

  return (
    <div className='avatar-container'>
      <ImgPlaceHolder>
        {avatarLoading ? <Spinner /> : <AvatarImg img={avatarImg} />}
      </ImgPlaceHolder>

      <div className='fileInput-container'>
        <MyButton save loading={avatarLoading} onClick={() => imgSubmit()}>
          שמור תמונה
        </MyButton>
        <input type='file' name='file' onChange={handdleImgChange} />
      </div>
    </div>
  );
};

export default AvatarForm;
