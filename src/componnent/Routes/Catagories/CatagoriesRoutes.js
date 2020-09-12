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

const CategoriesRoutes = ({
  match,
  getCategories,
  categories,
  addNewCategory,
  updateCategoty,
  deleteCategory,
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
        path={`${match.path}/:categotyID`}
        render={() => (
          <AddUpdateCategory
            addNewCategory={addNewCategory}
            updateCategoty={updateCategoty}
          />
        )}
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
