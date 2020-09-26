import React from 'react';
import MyButton from '../../componnent/My-button/MyButton';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import SingleClass from '../../componnent/single-items/Single-class/SingleClass';
import DeleteBox from '../../componnent/delete-box/DeleteBox';
import TableTop from '../../componnent/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import DataSpinner from '../../componnent/spinner/DataSpinner/DataSpiner';
import useDelete from '../../componnent/delete-box/useDeleteHook';

const ClassList = ({
  match,
  history,
  classes,
  buildings,
  deleteClass,
  loading,
}) => {
  const deleteHook = useDelete();
  const { id } = deleteHook.itemToDelete;

  const openBoxsetItemToDelete = (item) => {
    deleteHook.ItemToDelete({ id: item._id, name: item.name });
  };

  const closeBox = () => {
    deleteHook.setView(false);
  };

  const delteItem = async () => {
    try {
      await deleteClass(id);
    } catch (err) {
      console.log(err);
    }
    deleteHook.setView(false);
  };

  return (
    <SettingSectionContainer>
      <MyButton
        addButtonStyle
        onClick={() => history.push(`${match.path}/addNewClass`)}
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
      {deleteHook.deleteBoxView ? (
        <DeleteBox
          deleteClass={deleteClass}
          delteItem={delteItem}
          close={closeBox}
          item={deleteHook.itemToDelete}
        />
      ) : null}
    </SettingSectionContainer>
  );
};

export default withRouter(ClassList);
