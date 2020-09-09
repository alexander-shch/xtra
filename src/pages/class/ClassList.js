import React, { useState } from 'react';
import MyButton from '../../componnent/My-button/MyButton';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import SingleClass from '../../componnent/single-items/Single-class/SingleClass';
import DeleteBox from '../../componnent/delete-box/DeleteBox';
import TableTop from '../../componnent/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import DataSpinner from '../../componnent/spinner/DataSpinner/DataSpiner';

const ClassList = ({
  match,
  history,
  classes,
  buildings,
  deleteClass,
  loading,
}) => {
  const [deleteBoxView, setDeleteBoxView] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({ id: '', name: '' });
  const { id } = itemToDelete;

  const openBoxsetItemToDelete = (item) => {
    if (deleteBoxView === true) {
      return;
    }
    setDeleteBoxView(true);
    setItemToDelete({ id: item._id, name: item.name });
  };

  const closeBox = () => {
    setDeleteBoxView(false);
  };

  const delteItem = async () => {
    try {
      await deleteClass(id);
    } catch (err) {
      console.log(err);
    }
    closeBox();
  };

  return (
    <SettingSectionContainer>
      <MyButton
        addButtonStyle
        onClick={() => history.push(`${match.path}/addClass`)}
      >
        הוספת כיתה
      </MyButton>
      <h4>רשימה</h4>
      <TableTop tableProps={['בניין', 'כיתה', 'אפשרויות']} />

      {loading ? (
        <DataSpinner />
      ) : (
        classes.map((item) => (
          <SingleClass
            openBox={openBoxsetItemToDelete}
            key={item._id}
            item={item}
            buildings={buildings}
          />
        ))
      )}
      {deleteBoxView ? (
        <DeleteBox
          deleteClass={deleteClass}
          delteItem={delteItem}
          close={closeBox}
          item={itemToDelete}
        />
      ) : null}
    </SettingSectionContainer>
  );
};

export default withRouter(ClassList);
