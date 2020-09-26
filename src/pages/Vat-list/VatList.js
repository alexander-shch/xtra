import React from 'react';
import MyButton from '../../componnent/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import TableTop from '../../componnent/Table-top/Tabletop';
import SingleVatItem from '../../componnent/single-items/vatList/SingleVatItem';
import DeleteBox from '../../componnent/delete-box/DeleteBox';
import useDelete from '../../componnent/delete-box/useDeleteHook';

const VatList = ({ history, match, vatList, deleteVatItem }) => {
  const deleteHook = useDelete();
  const { id } = deleteHook.itemToDelete;

  const openBoxsetItemToDelete = (item) => {
    deleteHook.ItemToDelete({ id: item._id, name: item.title });
  };

  const closeBox = () => {
    deleteHook.setView(false);
  };

  const delteItem = async () => {
    try {
      await deleteVatItem(id);
    } catch (err) {
      console.log(err);
    }
    deleteHook.setView(false);
  };

  return (
    <SettingSectionContainer>
      <div className='addButtons'>
        <MyButton
          addButtonStyle
          onClick={() => history.push(`${match.path}/updateVatRate`)}
        >
          עידכון מע"מ
        </MyButton>
        <MyButton
          addButtonStyle
          onClick={() => history.push(`${match.path}/addNewVat`)}
        >
          הוספה
        </MyButton>
      </div>
      <h4>מכפילי שכר</h4>
      <TableTop
        tableProps={['כותרת', 'מכפילי שכר', 'האם להוסיף מע"מ', 'אפשרויות']}
      />
      {vatList.map((item) => (
        <SingleVatItem
          openBox={openBoxsetItemToDelete}
          key={item._id}
          item={item}
        />
      ))}
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

export default withRouter(VatList);
