import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import "../login.scss";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SIGNUP = gql`
    mutation signUp(
      $name: String!
      $lastName: String!
      $email: String!
      $password: String!
    ) {
      signUp(
        name: $name
        lastName: $lastName
        email: $email
        password: $password
      ) {
        token
        user {
          name
        }
      }
    }
  `;
  const [signUp] = useMutation(SIGNUP);

  return (
    <div className='fade-in'>
      <div className='login-label-box'>
        <Avatar className='avatar'>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' align='center'>
          Sign up
        </Typography>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUp({
            variables: {
              name,
              lastName,
              email,
              password,
            },
          });
        }}
      >
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12} sm={6}>
            <TextField
              autoComplete='fname'
              name='firstName'
              variant='outlined'
              required={true}
              fullWidth={true}
              id='firstName'
              label='First Name'
              autoFocus={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <TextField
              variant='outlined'
              required={true}
              fullWidth={true}
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='lname'
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              variant='outlined'
              required={true}
              fullWidth={true}
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              variant='outlined'
              required={true}
              fullWidth={true}
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          fullWidth={true}
          variant='contained'
          color='primary'
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
