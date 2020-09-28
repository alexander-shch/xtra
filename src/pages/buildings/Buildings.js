import React from 'react';
import BuildingItem from '../../componnent/single-items/Building-item/BuildingItem';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import MyButton from '../../componnent/My-button/MyButton';
import TableTop from '../../componnent/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import DeleteBox from '../../componnent/delete-box/DeleteBox';
import useDelete from '../../componnent/delete-box/useDeleteHook';
import SingleItemContainer from '../../componnent/single-items/SingleItemContainer';

const Buildings = ({
  deleteBuilding,
  match,
  history,
  data,
  searchfield,
  filterBy,
  ...otherProps
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
      await deleteBuilding(id);
    } catch (err) {
      console.log(err);
    }
    deleteHook.setView(false);
  };

  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addNewBulding`)}
        addButtonStyle
      >
        הוספת בניין
      </MyButton>
      <h4>רשימה</h4>
      <TableTop tableProps={['שם הבניין', 'אפשרויות']} />

      <SingleItemContainer
        SingleComponent={BuildingItem}
        data={data}
        loading={otherProps.loading}
        openBox={openBoxsetItemToDelete}
      />
      {deleteHook.deleteBoxView ? (
        <DeleteBox
          delteItem={delteItem}
          close={closeBox}
          item={deleteHook.itemToDelete}
        />
      ) : null}
    </SettingSectionContainer>
  );
};

export default withRouter(Buildings);
