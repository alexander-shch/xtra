import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getCategories,
  addNewCategory,
  updateCategory,
  deleteCategory,
  getSingleCategory,
  clearSingle,
} from '../../../Redux/categories/categories.action';
import AddUpdateCategory from '../../../pages/Categories/Add-Update-Category/AddUpdateCategory';
import Spinner from '../../spinner/Spinner';
import DeleteBox from '../../delete-box/DeleteBox';
import { closeConfirmMessage } from '../../../Redux/on-delete/delete.action';

const CategoriesList = lazy(() =>
  import('../../../pages/Categories/CategoriesList')
);

const CategoriesRoutes = ({
  match,
  getCategories,
  categories,
  addNewCategory,
  updateCategory,
  deleteCategory,
  confirmMessageData,
  closeConfirmMessage,
  loading,
  ...props
}) => {
  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <DeleteBox
          confirmMessageData={confirmMessageData}
          closeConfirmMessage={closeConfirmMessage}
          deleteFunction={deleteCategory}
        />
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <CategoriesList categories={categories} loading={loading} />
          )}
        />
        <Route
          exact
          path={`${match.path}/addNewCategory`}
          render={() => <AddUpdateCategory addNewCategory={addNewCategory} />}
        />
        <Route
          path={`${match.path}/updateCategory/:categoryID`}
          render={() => (
            <AddUpdateCategory updateCategory={updateCategory} {...props} />
          )}
        />
      </Suspense>
    </>
  );
};
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
  confirmMessageData: state.delete,
  singleCategory: state.categories.singleCategory,
  error: state.categories.error,
  innerSinglePageLoading: state.categories.innerSinglePageLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  addNewCategory: (objToServer) => dispatch(addNewCategory(objToServer)),
  updateCategory: (categoryID, objToServer) =>
    dispatch(updateCategory(categoryID, objToServer)),
  deleteCategory: (categoryID) => dispatch(deleteCategory(categoryID)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
  getSingleCategory: (id) => dispatch(getSingleCategory(id)),
  clearSingle: () => dispatch(clearSingle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesRoutes);
