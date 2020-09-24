import React from 'react';
import './avatarForm.style.scss';
import MyButton from '../../../My-button/MyButton';
import Spinner from '../../../spinner/Spinner';
import styled from 'styled-components';

const AvatarImg = styled.div`
  height: 150px;
  width: 150px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;

const AvatarForm = ({
  handdleImgChange,
  fileSubmit,
  lecture,
  avatarLoading,
}) => {
  const img = lecture[0].avatar
    ? `http://localhost:3005/uploads/${lecture[0].avatar.name}`
    : 'https://via.placeholder.com/150';

  return (
    <div className='avatar-container'>
      {avatarLoading ? <Spinner /> : <AvatarImg img={img} />}

      <div className='fileInput-container'>
        <MyButton onClick={() => fileSubmit()}>שמור תמונה</MyButton>
        <input type='file' name='file' onChange={handdleImgChange} />
      </div>
    </div>
  );
};

export default AvatarForm;