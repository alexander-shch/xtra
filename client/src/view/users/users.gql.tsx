import gql from "graphql-tag";

const UserFragment = gql`
  fragment UserProps on User {
    id
    firstName
    lastName
    email
    role
    avatarUrl
    isBlacklisted
  }
`

export const GET_USERS = gql`
  query getUsers($limit: Int!, $offset: Int) {
    users(limit: $limit, offset: $offset) {
      items {
        ...UserProps
      }
      total
    }
  }
  ${UserFragment}
`;

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserProps
    },
  }
  ${UserFragment}
`;

export const UPDATE_USER_ROLE = gql`
  mutation updateUserRole($id: String!, $role: UserRoleEnum!) {
    updateUserRole(id: $id, role: $role) {
      ...UserProps
    }
  }
  ${UserFragment}
`;

export const UPDATE_USER_IS_BLACKLISTED = gql`
  mutation updateUserIsBlacklisted($id: String!, $isBlacklisted: Boolean!) {
    updateUserIsBlacklisted(id: $id, isBlacklisted: $isBlacklisted) {
        ...UserProps
    }
  }
  ${UserFragment}
`;
