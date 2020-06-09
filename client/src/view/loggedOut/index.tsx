
import React from 'react';
import ContentComponent from '../../components/content/content.component';

import './loggedOut.scss';

import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from "@material-ui/core/Container";
import { Avatar, Typography } from '@material-ui/core';

const LoggedOutComponent = () => {
    return (
      <ContentComponent className='center'>
        <Container component='main' maxWidth='xs'>
          <div className='fade-in'>
            <div className='login-label-box'>
              <Avatar className='avatar'>
                  <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5' align='center'>
                  You're logged out
              </Typography>
            </div>
            <form
            onSubmit={env => {
              const target = `${window.location.protocol}//${window.location.host}/`
              window.location.replace(`/auth/login?target=${target}`);
              env.preventDefault();
            }}>
              <Button type='submit' fullWidth={true} variant='contained' color='primary'>
                  Log in
              </Button>
            </form>
          </div>
        </Container>
      </ContentComponent>
     
    );
  };
  
  export default LoggedOutComponent;