import React, { useState } from 'react';
import MyButton from '../../componnent/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import TableTop from '../../componnent/Table-top/Tabletop';
import SingleVatItem from '../../componnent/single-items/vatList/SingleVatItem';
import DeleteBox from '../../componnent/delete-box/DeleteBox';

const VatList = ({ history, match, vatList, deleteVatItem }) => {
  const [deleteBoxView, setDeleteBoxView] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({ id: '', name: '' });
  const { id } = itemToDelete;
  const openBoxsetItemToDelete = (item) => {
    if (deleteBoxView === true) {
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
      await deleteVatItem(id);
    } catch (err) {
      console.log(err);
    }
    closeBox();
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
      {deleteBoxView ? (
        <DeleteBox delteItem={delteItem} close={closeBox} item={itemToDelete} />
      ) : null}
    </SettingSectionContainer>
  );
};

export default withRouter(VatList);
