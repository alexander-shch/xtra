import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getCategories,
  addNewCategory,
  updateCategoty,
  deleteCategory,
} from '../../../Redux/categories/categories.action';
import AddUpdateCategory from '../../Add-Update-catagory/AddUpdateCategory';
import Spinner from '../../spinner/Spinner';
import WithSpinner from '../../spinner/WithSpinner';

const AddUpdateCategoryWithSpinner = WithSpinner(AddUpdateCategory);
const CategoriesList = lazy(() =>
  import('../../../pages/Categories/CategoriesList')
);

const CategoriesRoutes = ({
  match,
  getCategories,
  categories,
  addNewCategory,
  updateCategoty,
  deleteCategory,
  loading,
}) => {
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, [getCategories, categories]);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <CategoriesList
              categories={categories}
              deleteCategory={deleteCategory}
              loading={loading}
            />
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
              categories={categories}
              updateCategoty={updateCategoty}
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
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  addNewCategory: (objToServer) => dispatch(addNewCategory(objToServer)),
  updateCategoty: (categoryID, objToServer) =>
    dispatch(updateCategoty(categoryID, objToServer)),
  deleteCategory: (categoryID) => dispatch(deleteCategory(categoryID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesRoutes);
