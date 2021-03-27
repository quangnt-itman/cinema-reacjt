import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED
} from "./../constants";

let initialState = {
  loading: false,
  user: null,
  err: null
};

const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      state.loading = true;
      state.user = null;
      state.err = null;
      return { ...state };
    case ADD_USER_SUCCESS:
      state.loading = false;
      state.user = action.data;
      state.err = null;
      return { ...state };
    case ADD_USER_FAILED:
      state.loading = false;
      state.user = null;
      state.err = action.err;
      return { ...state };

    default:
      return { ...state };
  }
};

export default addUserReducer;
