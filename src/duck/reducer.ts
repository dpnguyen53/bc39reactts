import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAIL } from "./constant";
import { AppState, Action, Product } from "./types";

const intialState: AppState<Product> = {
  loading: false,
  data: null,
  error: null,
};

const productReducer = (
  state = intialState,
  action: Action
): AppState<Product> => {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;

      return { ...state };
    }

    case GET_DATA_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;

      return { ...state };
    }

    case GET_DATA_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default productReducer;
