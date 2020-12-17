import React from 'react';
import { Route } from 'react-router-dom';
import AddUpdateGroup from '../../../pages/groups-list/add-update-group/AddUpdateGroup';
import GroupList from '../../../pages/groups-list/GroupList';

const GroupRoutes = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}`} render={() => <GroupList />} />
      <Route
        exact
        path={`${match.path}/addGroup`}
        render={() => <AddUpdateGroup />}
      />
    </>
  );
};

export default GroupRoutes;
