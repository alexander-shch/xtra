import React from 'react';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import TableTop from '../../componnent/Table-top/Tabletop';
import MyButton from '../../componnent/My-button/MyButton';
import { withRouter } from 'react-router-dom';
import SingleCategory from '../../componnent/single-items/single-category/SingleCategory';
import SingleItemContainer from '../../componnent/single-items/SingleItemContainer';

const CategoriesList = ({ history, match, categories, ...otherProps }) => {
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
        SingleComponent={SingleCategory}
        data={categories}
        loading={otherProps.loading}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(CategoriesList);
