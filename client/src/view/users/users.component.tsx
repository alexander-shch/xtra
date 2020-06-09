import React from 'react';
import Box from '../../components/box/box.component';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { PaginatedItems } from '../..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AddUserModal } from './add-user-modal.component';
import { Toggle } from '@fevo-tech/component-library';
import './users.styles.scss';
import { GET_USERS, UPDATE_USER_ROLE, UPDATE_USER_IS_BLACKLISTED } from './users.gql';
import { ApolloError } from 'apollo-client';
import { addNotification } from '../../services/notifications/notifications';
import { User, UserRoleEnum, userRoleKey } from './users.model';

export const Users: React.FC = () => {
  const [updateUserRoleMutation] = useMutation(UPDATE_USER_ROLE,
    {
      onCompleted(data: {updateUserRole: User}) {
        addNotification(`Role for ${data.updateUserRole.email} changed to ${UserRoleEnum[data.updateUserRole.role]}`, 'success')
      },
      onError(error: ApolloError) {
        addNotification(error.message, 'danger')
      }
    });

  const updateUserRole = (id: string, role: userRoleKey ) => {
    updateUserRoleMutation({
      variables: {
        id,
        role,
      },
    });
  }

  const [updateUserIsBlacklistedMutation] = useMutation(UPDATE_USER_IS_BLACKLISTED,
    {
      onCompleted(data: {updateUserIsBlacklisted: User}) {
        addNotification(`User ${data.updateUserIsBlacklisted.isBlacklisted ? 'blacklisted' : 'whitelisted'}`, data.updateUserIsBlacklisted.isBlacklisted ? 'warning' : 'success')
      },
      onError(error: ApolloError) {
        addNotification(error.message, 'danger')
      }
    });

  const updateUserIsBlacklisted = (id: string, isBlacklisted: boolean ) => {
    updateUserIsBlacklistedMutation({
      variables: {
        id,
        isBlacklisted,
      },
    });
  }

  const { loading, error, data, fetchMore } = useQuery<{users: PaginatedItems<User>}>(GET_USERS, { //useQuery<PaginatedData<User>>(
    variables: {
      limit: 50,
      offset: 0,
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const [userModalActive, setUserModalActive] = React.useState(false);
  const roleOptions = Object.keys(UserRoleEnum);

  return (
    <Box
      title='Users'
      subtitle='Add, delete and manage users'
      buttonText='Add User'
      buttonAction={() => setUserModalActive(!userModalActive)}
    >
      <AddUserModal isActive={userModalActive} setActive={setUserModalActive}></AddUserModal>
      <div className='lists-wrapper'>
        {error ? (
          <p className='notification is-warning is-light'>
            There was an error fetching the users, please try again.
          </p>
        ) : (
          <table className='table is-striped is-fullwidth'>
            <thead>
              <tr>
                <th className='is-narrow'></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className='has-text-right'>Whitelisted?</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={5}>
                    <progress
                      className='progress is-small is-primary'
                      max='100'
                    >
                      15%
                    </progress>
                  </td>
                </tr>
              )}
              {data?.users.total ?
                data.users.items.map((user) => (
                  <tr key={user.id}>
                    <td>
                      {user.avatarUrl ? (
                        <span className='image is-24x24'>
                          <img
                            className='is-rounded'
                            src={user.avatarUrl}
                            alt={user.firstName + ' ' + user.lastName + ' profile picture'}
                          />
                        </span>
                      ) : (
                        <span className='icon fa-layers fa-fw'>
                          <FontAwesomeIcon icon='circle' size='lg' color='#32c9fb'/>
                          <FontAwesomeIcon icon='user' size='sm' inverse={true}/>
                        </span>
                      )}
                    </td>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td className='selectable'>{user.email}</td>
                    <td>
                      <span className='select'>
                        <select defaultValue={user.role} onChange={(e) => updateUserRole(user.id, e.target.value  as keyof typeof UserRoleEnum)}>
                          {roleOptions.map(option => (
                            <option key={option} value={option} >{UserRoleEnum[option as keyof typeof UserRoleEnum]}</option>
                          ))}
                        </select>
                      </span>
                    </td>
                    <td className='has-text-right'>
                      <span className='toggle-wrapper'>
                        <Toggle
                            stateLabel={{
                              on: 'Whitelisted',
                              off: 'Blacklisted',
                            }}
                            checked={!user.isBlacklisted}
                            onChange={() => {updateUserIsBlacklisted(user.id, !user.isBlacklisted)}}
                          />
                      </span>
                    </td>
                  </tr>
                )):
                <tr>
                  <td colSpan={5}><em>There are no users to display</em></td>
                </tr>
                }
            </tbody>
          </table>
        )}
      </div>
    </Box>
  );
};
