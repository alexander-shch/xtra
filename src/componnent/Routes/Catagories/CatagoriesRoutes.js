import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getCategories,
  addNewCategory,
  updateCategoty,
  deleteCategory,
} from '../../../Redux/categories/categories.action';
import CategoriesList from '../../../pages/Categories/CategoriesList';
import AddUpdateCategory from '../../Add-Update-catagory/AddUpdateCategory';
import Spinner from '../../spinner/Spinner';

const CategoriesRoutes = ({
  match,
  getCategories,
  categories,
  addNewCategory,
  updateCategoty,
  deleteCategory,
  loading,
  ...otherProps
}) => {
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, [getCategories, categories]);
  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <CategoriesList
            categories={categories}
            deleteCategory={deleteCategory}
            {...otherProps}
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
        render={() =>
          loading ? (
            <Spinner />
          ) : (
            <AddUpdateCategory
              categories={categories}
              updateCategoty={updateCategoty}
            />
          )
        }
      />
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
