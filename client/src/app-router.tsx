import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Merchants } from "./view/merchants/merchants.component";
import { Users } from "./view/users/users.component";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SingleMerchant } from "./view/merchants/single-merchant/single-merchant.component";
import LoggedOutComponent from "./view/loggedOut";

export interface AppRoute {
  path: string;
  hash?: string;
  title?: string;
  component: any;
  exact?: boolean;
  /** Name of fontAwesome icon (must be imported and added to the library in App.tsx) */
  icon?: IconProp;
}

export const adminAppRoutes: AppRoute[] = [
  {
    path: '/',
    title: 'Merchants',
    component: Merchants,
    exact: true,
    icon: ['fab', 'shopify'],
  },
  {
    path: '/login',
    component: LoggedOutComponent,
  },
  {
    path: '/users',
    title: 'Users',
    component: Users,
    icon: 'user-friends',
  },
  {
    path: '/merchant/:merchantId',
    component: SingleMerchant,
    exact: false,
  }
  // TODO = this will be used in the customer facing part of the app
  // {
  //   path: '/store-settings',
  //   title: 'Store Settings',
  //   component: StoreSettings,
  //   exact: true,
  //   icon: 'cog',
  // }
]

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        { adminAppRoutes.map((route: AppRoute, index: number) => 
          <Route key={index} exact={route.exact} path={route.path} component={route.component} />
        )}
      </Switch>
    );
  }
}
