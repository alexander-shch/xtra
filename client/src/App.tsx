import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainAppRouter from "./app-router";
import ContentComponent from "./components/content/content.component";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faHome,
  faUserFriends,
  faUser,
  faCircle,
  faExternalLinkAlt,
  faCheckCircle,
  faTimesCircle,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import SideBar from "./components/side-bar/side-bar.component";
import NavBar from "./components/nav-bar/nav-bar.component";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


library.add(
  faCog,
  faHome,
  faUserFriends,
  faUser,
  faCircle,
  faShopify,
  faExternalLinkAlt,
  faCheckCircle,
  faTimesCircle,
  faSyncAlt
);

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <BrowserRouter>
          <NavBar />
          <div className="page-content-wrapper">
            <SideBar />
            <ContentComponent>
              <ReactNotification />
              <MainAppRouter />
            </ContentComponent>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
