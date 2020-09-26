import { useState } from 'react';

const useDelete = () => {
  const [deleteBoxView, setDeleteBoxView] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({ id: '', name: '' });

  const setView = (props) => {
    setDeleteBoxView(props);
  };
  const ItemToDelete = (props) => {
    if (deleteBoxView) {
      return;
    }
    setDeleteBoxView(true);
    setItemToDelete(props);
  };

  return { deleteBoxView, setView, ItemToDelete, itemToDelete };
};
export default useDelete;
