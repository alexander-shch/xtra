import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUserLog } from "./Redux/userReduser/user.actions";
import SignIn from "../src/pages/SignIn/SignIn";
import Main from "./pages/Main/Main";
import { Route } from "react-router-dom";
import Spinner from "./componnent/spinner/Spinner";

const App = ({ userLoged, setUserLog, loading }) => {
  useEffect(() => {
    setUserLog();
  }, [setUserLog]);

  return (
    <>
      <Route
        path="/"
        render={() =>
          userLoged ? <Main /> : loading ? <Spinner /> : <SignIn />
        }
      ></Route>
    </>
  );
};

const mapStateToProps = (state) => ({
  userLoged: state.user.userLoged,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setUserLog: () => dispatch(setUserLog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
