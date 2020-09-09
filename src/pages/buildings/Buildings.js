import React, { useState } from 'react';
import BuildingItem from '../../componnent/single-items/Building-item/BuildingItem';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import MyButton from '../../componnent/My-button/MyButton';
import TableTop from '../../componnent/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import DataSpinner from '../../componnent/spinner/DataSpinner/DataSpiner';
import DeleteBox from '../../componnent/delete-box/DeleteBox';

const Buildings = ({ deleteBuilding, match, history, data, ...otherProps }) => {
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
      await deleteBuilding(id);
    } catch (err) {
      console.log(err);
    }
    closeBox();
  };

  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addBuilding`)}
        addButtonStyle
      >
        הוספת בניין
      </MyButton>
      <h4>רשימה</h4>
      <TableTop tableProps={['שם הבניין', 'אפשרויות']} />
      {otherProps.loading ? (
        <DataSpinner />
      ) : (
        data.map((item) => (
          <BuildingItem
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

export default withRouter(Buildings);
