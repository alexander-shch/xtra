import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserLog } from './Redux/userReducer/user.actions';
import SignIn from './pages/SignIn/SignIn';
import Main from './pages/Main/Main';
import { Route } from 'react-router-dom';
import Spinner from './components/spinner/Spinner';

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
