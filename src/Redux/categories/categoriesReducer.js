const INTIAL_STATE = {
  loading: true,
  categories: [],
  singleCategory: null,
  error: null,
};

const categoriesReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES_START':
    case 'ADD_NEW_CATEGORY_START':
    case 'UPDATE_CATEGORY_START':
    case 'DELETE_CATEGORY_START':
      return { ...state, loading: true };
    case 'GET_CATEGORIES_SUCCESS':
      return { ...state, categories: action.payload, loading: false };
    case 'ADD_NEW_CATEGORY_SUCCESS':
      return {
        ...state,
        categories: [...state.categories, action.payload],
        loading: false,
      };
    case 'UPDATE_CATEGORY_SUCSESS':
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
    case 'DELETE_CATEGORY_SUCSESS':
      return {
        ...state,
        categories: state.categories.filter(
          (item) => item._id !== action.payload
        ),
        loading: false,
      };
    case 'GET_SINGLE_CATEGORY_SUCSESS':
      return { ...state, singleCategory: action.payload, loading: false };
    case 'GET_CATEGORIES_FAILED':
    case 'ADD_NEW_CATEGORY_FAILED':
    case 'UPDATE_CATEGORY_FAILED':
    case 'DELETE_CATEGORY_FAIELD':
    case 'GET_SINGLE_CATEGORY_FAILED':
      return { ...state, loading: false, error: action.payload };
    case 'CLEAR_SINGLE':
      return { ...state, singleCategory: null, error: null };
    default:
      return state;
  }
};

export default categoriesReducer;
