import React, { Component } from 'react';

export interface UserAuthServiceModel {
  state: boolean;
  setState: (v: boolean) => void;
}

export const UserAuthService = React.createContext<UserAuthServiceModel>({
  state: false,
  setState: () => void 0,
});

export default class UserAuthServiceContainer extends Component {
  state = {
    isLoggedIn: false,
  };

  setNewUserState(newVal: boolean) {
    this.setState({ isLoggedIn: newVal });
  }

  render() {
    return (
      <UserAuthService.Provider
        value={{
          state: this.state.isLoggedIn,
          setState: this.setNewUserState.bind(this),
        }}>
        {this.props.children}
      </UserAuthService.Provider>
    );
  }
}
