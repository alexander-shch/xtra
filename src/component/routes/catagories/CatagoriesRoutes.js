import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getCategories,
  addNewCategory,
  updateCategoty,
  deleteCategory,
} from '../../../redux/categories/categories.action';
import AddUpdateCategory from '../../../pages/categories/add-update-category/addUpdateCategory';
import Spinner from '../../spinner/spinner';
import WithSpinner from '../../spinner/withSpinner';
import DeleteBox from '../../delete-box/deleteBox';
import { closeConfirmMessage } from '../../../redux/on-delete/delete.action';

const AddUpdateCategoryWithSpinner = WithSpinner(AddUpdateCategory);
const CategoriesList = lazy(() =>
  import('../../../pages/categories/CategoriesList')
);

const CategoriesRoutes = ({
  match,
  getCategories,
  categories,
  addNewCategory,
  updateCategoty,
  deleteCategory,
  confirmMessageData,
  closeConfirmMessage,
  loading,
  getSingleCategory,
  singleCategory,
  clearSingle,
  error,
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
          path={`${match.path}/updateCategory/:categotyID`}
          render={() => (
            <AddUpdateCategoryWithSpinner
              loading={loading}
              getSingleCategory={getSingleCategory}
              singleCategory={singleCategory}
              categories={categories}
              updateCategoty={updateCategoty}
              clearSingle={clearSingle}
              error={error}
            />
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
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  addNewCategory: (objToServer) => dispatch(addNewCategory(objToServer)),
  updateCategoty: (categoryID, objToServer) =>
    dispatch(updateCategoty(categoryID, objToServer)),
  deleteCategory: (categoryID) => dispatch(deleteCategory(categoryID)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
  getSingleCategory: (id) => dispatch(getSingleCategory(id)),
  clearSingle: () => dispatch(clearSingle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesRoutes);
