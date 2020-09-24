import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../Redux/My-Alert/myAlert.action';
import MyAlert from '../My-Alert/MyAlert';
import MyButton from '../My-button/MyButton';

const Dashboard = ({ myAlert }) => {
  return (
    <>
      <MyAlert />
      <MyButton onClick={() => setAlert('nagrin alert!', 'sucsess')}>
        test
      </MyButton>
      <h1>Dashboard</h1>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAlert: (content, style) => dispatch(setAlert(content, style)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
