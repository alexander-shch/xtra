import React from 'react';
import { SettingSectionContainer } from '../../components/global-style/SettingSection';
import TableTop from '../../components/Table-top/Tabletop';
import MyButton from '../../components/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import SingleCategory from '../../components/Single-Items/single-category/SingleCategory';
import SingleItemContainer from '../../components/Single-Items/SingleItemContainer';

const CategoriesList = ({
  history,
  match,
  categories,
  deleteList,
  ...otherProps
}) => {
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

      <SingleItemContainer
        deleteList={deleteList}
        SingleComponent={SingleCategory}
        data={categories}
        loading={otherProps.loading}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(CategoriesList);
