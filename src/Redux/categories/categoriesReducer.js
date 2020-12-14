const INITIAL_STATE = {
  loading: true,
  innerSinglePageLoading: true,
  categories: [],
  singleCategory: null,
  error: null,
  singlePageError: null,
  deleteList: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES_START':
    case 'ADD_NEW_CATEGORY_START':
    case 'UPDATE_CATEGORY_START':
      return { ...state, loading: true };
    case 'DELETE_CATEGORY_START':
      return { ...state, deleteList: [...state.deleteList, action.payload] };
    case 'GET_CATEGORIES_SUCCESS':
      return { ...state, categories: action.payload, loading: false };
    case 'ADD_NEW_CATEGORY_SUCCESS':
      return {
        ...state,
        categories: [...state.categories, action.payload],
        loading: false,
      };
    case 'UPDATE_CATEGORY_SUCCESS':
      const { categories } = state;
      const index = categories.findIndex(
        (category) => category._id === action.payload._id
      );
      categories[index] = action.payload;
      return {
        ...state,
        loading: false,
        categories,
        singleCategory: action.payload,
      };
    case 'DELETE_CATEGORY_SUCCESS':
      return {
        ...state,
        categories: state.categories.filter(
          (item) => item._id !== action.payload
        ),
        deleteList: state.deleteList.filter((item) => item === action.payload),
      };
    case 'GET_SINGLE_CATEGORY_START':
      return { ...state, innerSinglePageLoading: true };
    case 'GET_SINGLE_CATEGORY_SUCCESS':
      return {
        ...state,
        singleCategory: action.payload,
        innerSinglePageLoading: false,
      };
    case 'GET_CATEGORIES_FAILED':
    case 'ADD_NEW_CATEGORY_FAILED':
    case 'UPDATE_CATEGORY_FAILED':
    case 'DELETE_CATEGORY_FAILED':
      return { ...state, loading: false, error: action.payload };
    case 'CLEAR_SINGLE':
      return {
        ...state,
        singleCategory: null,
        error: null,
        innerSinglePageLoading: true,
        singlePageError: null,
      };
    case 'GET_SINGLE_CATEGORY_FAILED':
      return { ...state, singlePageError: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
