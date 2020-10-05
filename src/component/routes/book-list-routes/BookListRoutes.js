import React from 'react';
import { Route } from 'react-router-dom';
import BookList from '../../../pages/book-list/BookList';

const BookListRoutes = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}`} render={() => <BookList />} />
    </>
  );
};

export default BookListRoutes;
