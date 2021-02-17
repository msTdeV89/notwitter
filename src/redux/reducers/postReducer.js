import * as actions from "../actions/actionTypes";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case actions.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case actions.GET_POSTS:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export default postReducer;
