import React, { useState } from 'react';
import MyButton from '../../componnent/My-button/MyButton';
import './ClassList.style.scss';
import { deleteClass } from '../../Redux/classes/class.action';
import SingleClass from '../../componnent/Single-class/SingleClass';
import { connect } from 'react-redux';
import DeleteBox from '../../componnent/are-you-sure/DeleteBox';
import { withRouter } from 'react-router-dom';

const ClassList = ({ match, history, classes, buildings, deleteClass }) => {
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
    <div className='classesPage'>
      <MyButton
        addButtonStyle
        onClick={() => history.push(`${match.path}/addClass`)}
      >
        הוספת כיתה
      </MyButton>
      <h4 className='classesTitle'>רשימה</h4>
      <div className='classesHead'>
        <div className='classHeader'>
          <span>בניין</span>
        </div>
        <div className='classHeader'>
          <span>כיתה</span>
        </div>
        <div className='classHeader'>
          <span>אפשרויות</span>
        </div>
      </div>
      {classes.map((item) => (
        <SingleClass
          openBox={openBoxsetItemToDelete}
          key={item._id}
          item={item}
          buildings={buildings}
        />
      ))}
      {deleteBoxView ? (
        <DeleteBox delteItem={delteItem} close={closeBox} item={itemToDelete} />
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteClass: (id) => dispatch(deleteClass(id)),
});

export default connect(null, mapDispatchToProps)(withRouter(ClassList));
