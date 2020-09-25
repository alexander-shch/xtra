import React, { useState } from 'react';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import TableTop from '../../componnent/Table-top/Tabletop';
import MyButton from '../../componnent/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import SingleCategory from '../../componnent/single-items/single-category/SingleCategory';
import DataSpinner from '../../componnent/spinner/DataSpinner/DataSpiner';
import DeleteBox from '../../componnent/delete-box/DeleteBox';

const CategoriesList = ({
  history,
  match,
  categories,
  deleteCategory,
  ...otherProps
}) => {
  const [deleteBoxView, setDeleteBoxView] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({ id: '', name: '' });
  const { id } = itemToDelete;
  const openBoxsetItemToDelete = (item) => {
    if (deleteBoxView) {
      return;
    }
    setDeleteBoxView(true);
    setItemToDelete({ id: item._id, name: item.title });
  };

  const closeBox = () => {
    setDeleteBoxView(false);
  };

  const delteItem = async () => {
    try {
      await deleteCategory(id);
    } catch (err) {
      console.log(err);
    }
    closeBox();
  };

  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addNewCategory`)}
        addButtonStyle
      >
        הוספת תחום
      </MyButton>
      <h4>רשימת תחומים</h4>
      <TableTop tableProps={['תחום', 'אפשרויות']} />
      {otherProps.loading ? (
        <DataSpinner />
      ) : (
        categories.map((item) => (
          <SingleCategory
            openBox={openBoxsetItemToDelete}
            key={item._id}
            item={item}
          />
        ))
      )}
      {deleteBoxView ? (
        <DeleteBox delteItem={delteItem} close={closeBox} item={itemToDelete} />
      ) : null}
    </SettingSectionContainer>
  );
};

export default withRouter(CategoriesList);
