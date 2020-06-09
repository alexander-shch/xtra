import React, { useState } from 'react';
import { UserAuthService } from '../../../services/user-auth.service';
import '../login.scss';

import { Avatar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const SignIn = () => {
  const [email, setEmail] = useState('dude@gmail.com');
  const [password, setPassword] = useState('1234');

  const checkEmail = () => {
    if (email !== 'dude@gmail.com' || password !== '1234') {
      alert('Wrong password dude/et');
    }
    return email === 'dude@gmail.com' && password === '1234';
  };

  return (
    <div className='fade-in'>
      <UserAuthService.Consumer>
        {state => (
          <>
            <div className='login-label-box'>
              <Avatar className='avatar'>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5' align='center'>
                Login
              </Typography>
            </div>
            <form
              onSubmit={evt => {
                evt.preventDefault();
                state.setState(checkEmail());
              }}>
              <TextField
                variant='outlined'
                required={true}
                fullWidth={true}
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                variant='outlined'
                required={true}
                fullWidth={true}
                name='password'
                label='Password'
                type='password'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Button type='submit' fullWidth={true} variant='contained' color='primary'>
                Submit
              </Button>
            </form>
          </>
        )}
      </UserAuthService.Consumer>
    </div>
  );
};

export default SignIn;
