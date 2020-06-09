import React, { useState } from 'react';
import {Modal, ModalProps} from '../../components/modal/modal.component';
import { useMutation } from '@apollo/react-hooks';
import { userRoleKey, UserRoleEnum, User } from './users.model';
import { GET_USERS, CREATE_USER } from './users.gql';
import { addNotification } from '../../services/notifications/notifications';
import { ApolloError } from 'apollo-client';

export const AddUserModal: React.FC<ModalProps> = ({isActive, setActive}) => {

  const [createUserMutation] = useMutation(CREATE_USER, {
    refetchQueries: [
      {
        query: GET_USERS,
      },
    ],
    onCompleted(data: {createUserMutation: User}) {
      addNotification(`User ${data.createUserMutation.email} created`, 'success')
    },
    onError(error: ApolloError) {
      addNotification(error.message, 'danger')
    }
  });

  const createUser = (firstName: string, lastName: string, email: string, role: userRoleKey, avatarUrl: string = '') => {
    createUserMutation({
      variables: {
        input: {
          firstName,
          lastName,
          email,
          role,
          avatarUrl
        }
      },
    });
  }

  const roleOptions = Object.keys(UserRoleEnum);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('USER' as userRoleKey);
  const [avatarUrl, setAvatarUr] = useState('');

  const isEmailValid = () => {
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\']+(\.[^<>()\[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i);
    return email.length === 0 || validEmailRegex.test(email);
  }

  const isFormValid = () => {
    return firstName.length && lastName.length && email.length && isEmailValid();
  }

  const createUserAndCloseModal = () => {
    if (isFormValid()) {
      createUser(firstName, lastName, email, role);
      //setActive(false);
    }
  }

  return (
    <Modal isActive={isActive} setActive={setActive}>
      <h2>Add a new user</h2>
      <form onSubmit={() => createUserAndCloseModal()}>
        <div className='field'>
          <label className='label'>First Name</label>
          <div className='control'>
            <input className='input' type='text' placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Last Name</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)}/>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Email</label>
          <div className='control'>
            <input className='input' type='email' placeholder='name@example.com' value={email} onChange={e => setEmail(e.target.value)}/>
            {!isEmailValid() && <p className='help is-danger'>This email is invalid</p>}
          </div>
        </div>
        <div className='field'>
          <label className='label'>Role</label>
          <div className='control'>
            <span className='select'>
              <select defaultValue={role} onChange={(e) => setRole(e.target.value as keyof typeof UserRoleEnum)}>
                {roleOptions.map(option => (
                  <option key={option} value={option} >{UserRoleEnum[option as keyof typeof UserRoleEnum]}</option>
                ))}
              </select>
            </span>
          </div>
        </div>
        <div className='field'>
          <label className='label'>User Avatar</label>
          <div className='file has-name'>
            <label className='file-label'>
              <input className='file-input' type='file' name='resume' />
              <span className='file-cta'>
                <span className='file-icon'>
                  <i className='fas fa-upload'></i>
                </span>
                <span className='file-label'>
                  Choose a file&hellip;
                </span>
              </span>
              <span className='file-name'>
                { avatarUrl || 'No file chosen'}
              </span>
            </label>
          </div>
        </div>
        <div className='field is-grouped'>
          <div className='control'>
            <input className='button is-link' type='submit' value='Submit' disabled={!isFormValid()} />
          </div>
          <div className='control'>
            <button className='button is-link is-light' onClick={() => setActive(!isActive)}>Cancel</button>
          </div>
        </div>
      </form>
    </Modal>
  )
}