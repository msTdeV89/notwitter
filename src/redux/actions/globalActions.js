import * as actions from "../actions/actionTypes";

export const handleCurrentPage = (page) => ({
  type: actions.CURRENT_PAGE,
  payload: page,
});
export const handleMobileNewPost = () => ({
  type: actions.CURRENT_PAGE,
});
