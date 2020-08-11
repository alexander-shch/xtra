import React, { useState } from 'react';
import BuildingItem from '../../componnent/Building-item/BuildingItem';
import './buildings.style.scss';
import MyButton from '../../componnent/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import DataSpinner from '../../componnent/spinner/DataSpinner/DataSpiner';
import DeleteBox from '../../componnent/are-you-sure/DeleteBox';
import { connect } from 'react-redux';
import { deleteBuilding } from '../../Redux/buildings/buildings.actions';

const Buildings = ({
  onDeleteBuilding,
  match,
  history,
  data,
  ...otherProps
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
      await onDeleteBuilding(id);
    } catch (err) {
      console.log(err);
    }
    closeBox();
  };

  return (
    <div className='buildingPage'>
      <MyButton
        onClick={() => history.push(`${match.path}/addBuilding`)}
        addButtonStyle
      >
        הוספת בניין
      </MyButton>
      <h4 className='buildingsTitle'>רשימה</h4>
      <div className='buildingHead'>
        <div className='headerBlock'>
          <span>שם הבניין</span>
        </div>
        <div className='headerBlock'>
          <span>אפשרויות</span>
        </div>
      </div>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteBuilding: (id) => dispatch(deleteBuilding(id)),
});

export default connect(null, mapDispatchToProps)(withRouter(Buildings));
