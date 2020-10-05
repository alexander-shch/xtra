import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { setUserLog } from './redux/userReducer/user.actions';
import SignIn from './pages/signIn/SignIn';
import Main from './pages/main/main';
import Spinner from './component/spinner/Spinner';

const App = ({ userLoged, setUserLog, loading }: any) => {
  useEffect(() => {
    setUserLog();
  }, [setUserLog]);

  return (
    <Route
      path='/'
      render={() => (userLoged ? <Main /> : loading ? <Spinner /> : <SignIn />)}
    ></Route>
  );
};

const mapStateToProps = (state: any) => ({
  userLoged: state.user.userLoged,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUserLog: () => dispatch(setUserLog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
