import React from 'react';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import MyButton from '../../componnent/My-button/MyButton';
import TableTop from '../../componnent/Table-top/Tabletop';
import SearchField from '../../componnent/searchField/SearchField';
import { withRouter } from 'react-router-dom';
import DataSpinner from '../../componnent/spinner/DataSpinner/DataSpiner';
import SingleLecture from '../../componnent/single-items/single-lecture/SingleLecture';
import DeleteBox from '../../componnent/delete-box/DeleteBox';
import useDelete from '../../componnent/delete-box/useDeleteHook';

const LecturersList = ({
  history,
  match,
  lectures,
  lecturesLoading,
  searchField,
  deleteLecture,
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
      await deleteLecture(id);
    } catch (err) {
      console.log(err);
    }
    deleteHook.setView(false);
  };

  let filterLectures = lectures.filter(({ name, email, phone }) => {
    if (!searchField) {
      return lectures;
    } else {
      const testString = `${name} ${email} ${phone}`;
      return testString.includes(searchField);
    }
  });

  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addLecture`)}
        addButtonStyle
      >
        הוספת מרצה
      </MyButton>
      <SearchField />

      <h4>מרצים</h4>
      <TableTop
        tableProps={[
          'שם המרצה ',
          'טלפון',
          'דוא"ל ',
          'שכר ברוטו לשעה',
          'אפשרויות',
        ]}
      />
      {lecturesLoading ? (
        <DataSpinner />
      ) : filterLectures.length === 0 ? (
        <h3>אין תוצאות</h3>
      ) : (
        filterLectures.map((item) => (
          <SingleLecture
            key={item._id}
            item={item}
            openBox={openBoxsetItemToDelete}
          />
        ))
      )}
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

export default withRouter(LecturersList);
