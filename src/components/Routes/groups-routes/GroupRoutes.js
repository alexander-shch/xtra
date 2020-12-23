import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import AddUpdateGroup from '../../../pages/groups-list/add-update-group/AddUpdateGroup';
import GroupList from '../../../pages/groups-list/GroupList';
import { connect } from 'react-redux';
import { getLectures } from '../../../Redux/Lectures/lectures.action';
import { getAllCoupons } from '../../../Redux/coupons/coupons.actions';

const GroupRoutes = ({
  match,
  getLectures,
  lectures,
  lectureLoading,
  getAllCoupons,
  couponsList,
  searchField,
  lecturesLoading,
}) => {
  useEffect(() => {
    getLectures();
    getAllCoupons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Route exact path={`${match.path}`} render={() => <GroupList />} />
      <Route
        exact
        path={`${match.path}/addGroup`}
        render={() => (
          <AddUpdateGroup
            lectures={lectures}
            lectureLoading={lectureLoading}
            couponsList={couponsList}
            searchField={searchField}
            lecturesLoading={lecturesLoading}
          />
        )}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  lectures: state.lectures.lectures,
  lectureLoading: state.lectures.listLoading,
  couponsList: state.coupons.couponsList,
  searchField: state.searchField.searchfield,
  lecturesLoading: state.lectures.listLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getLectures: () => dispatch(getLectures()),
  getAllCoupons: () => dispatch(getAllCoupons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupRoutes);
