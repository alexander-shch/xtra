import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-in.style.scss';
import InputField from '../../component/inputs/input-field/InputField';
import MyButton from '../../component/my-button/button';
import {
  setUserLog,
  getToken,
  signInFailed,
} from '../../redux/userReducer/user.actions';

const SignIn = ({ setUserLog, getToken, signInFailed }) => {
  const [UserDetail, setUserDetail] = useState({
    email: '',
    password: '',
  });
  const { email, password } = UserDetail;

  const handleChange = (e) => {
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
          handleChange={handleChange}
          required
        />
        <InputField
          name='password'
          type='password'
          label='סיסמה'
          value={password}
          handleChange={handleChange}
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
