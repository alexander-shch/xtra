import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import SignIn from './pages/signIn/sign-in';
import Main from './pages/main/main';
import Spinner from './component/spinner/spinner';
import { setUserLog } from './redux/userReducer/user.actions';

const App = ({ userLogged, setUserLog, loading }: any) => {
  useEffect(() => {
    setUserLog();
  }, [setUserLog]);

  return (
    <Route
      path='/'
      render={() => (userLogged ? <Main /> : loading ? <Spinner /> : <SignIn />)}
    ></Route>
  );
};

const mapStateToProps = (state: any) => ({
  userLogged: state.user.userLogged,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUserLog: () => dispatch(setUserLog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
