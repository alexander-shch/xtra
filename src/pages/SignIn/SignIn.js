import React, { useState } from 'react';
import { connect } from 'react-redux';
import './SignIn.style.scss';
import InputField from '../../components/inputs/input-field/InputField';
import MyButton from '../../components/My-button/MyButton';
import {
  setUserLog,
  getToken,
  signInFailed,
} from '../../Redux/userReducer/user.actions';

const SignIn = ({ setUserLog, getToken, signInFailed }) => {
  const [UserDetail, setUserDetail] = useState({
    email: '',
    password: '',
  });
  const { email, password } = UserDetail;

  const handdleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...UserDetail, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await getToken(email, password);
      await setUserLog();
    } catch (err) {
      signInFailed(err);
      alert('something went wrong');
    }
  };

  return (
    <div className='signIn-continer'>
      <h3 className='signIn-title'> כניסה למערכת אקסטרא</h3>
      <form onSubmit={handleSubmit}>
        <InputField
          name='email'
          type='email'
          label=' דואל'
          value={email}
          handleChange={handdleChange}
          required
        />
        <InputField
          name='password'
          type='password'
          label='סיסמה'
          value={password}
          handleChange={handdleChange}
          required
        />
        <div className='sign-in-buttons'>
          <MyButton type='button' forgot>
            ?שכחת סיסמה
          </MyButton>
          <MyButton type='submit'>כניסה</MyButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setUserLog: () => dispatch(setUserLog()),
  getToken: (email, password) => dispatch(getToken(email, password)),
  signInFailed: (err) => dispatch(signInFailed(err)),
});

export default connect(null, mapDispatchToProps)(SignIn);
