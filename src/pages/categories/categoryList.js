import React from 'react';
import { SettingSectionContainer } from '../../component/global-style/settingSection';
import TableTop from '../../component/table-top/Tabletop';
import MyButton from '../../component/my-button/button';
import { withRouter } from 'react-router-dom';
import SingleCategory from '../../component/single-items/single-category/singleCategory';
import SingleItemContainer from '../../component/single-items/singleItemContainer';

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
