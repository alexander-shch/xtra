import React, { useState } from 'react';
import './avatarForm.style.scss';
import MyButton from '../../../../../component/my-button/MyButton';
import Spinner from '../../../../../component/spinner/spinner';
import styled from 'styled-components';

const AvatarImg = styled.div`
  height: 150px;
  width: 150px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;

const AvatarForm = ({ lecture, avatarLoading, id, setAvatarImg }) => {
  const [imgFile, setImgFile] = useState({ img: null });
  const { img } = imgFile;

  const handleImgChange = (e) => {
    const { files } = e.target;
    setImgFile({ img: files });
  };

  const imgSubmit = async () => {
    if (!img) {
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

  const avatarImg = lecture[0].avatar
    ? `http://localhost:3005/uploads/${lecture[0].avatar.name}`
    : 'https://via.placeholder.com/150';

  return (
    <div className='avatar-container'>
      {avatarLoading ? <Spinner /> : <AvatarImg img={avatarImg} />}

      <div className='fileInput-container'>
        <MyButton save loading={avatarLoading} onClick={() => imgSubmit()}>
          שמור תמונה
        </MyButton>
        <input type='file' name='file' onChange={handleImgChange} />
      </div>
    </div>
  );
};

export default AvatarForm;
