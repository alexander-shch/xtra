import React, { useState } from "react";
import ContentComponent from "../../components/content/content.component";
import "./login.scss";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const LoginComponent = () => {
  const [hideSignUp, setHideSignUp] = useState(true);

  return (
    <ContentComponent className='center'>
      <Container component='main' maxWidth='xs'>
        <div className='login-form'>
          {hideSignUp ? (
            <>
              <SignIn />
              <Grid container={true} justify='center'>
                <Grid item={true}>
                  <Link
                    href='#'
                    variant='body2'
                    onClick={() => {
                      setHideSignUp(!hideSignUp);
                    }}
                  >
                    Don't have an account?
                  </Link>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <SignUp />
              <Grid container={true} justify='center'>
                <Grid item={true}>
                  <Link
                    href='#'
                    variant='body2'
                    onClick={() => {
                      setHideSignUp(!hideSignUp);
                    }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </>
          )}
        </div>
      </Container>
    </ContentComponent>
  );
};

export default LoginComponent;
