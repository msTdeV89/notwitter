import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import * as actions from "../redux/actions/actionTypes";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NewPostMobile = () => {
  const dispatch = useDispatch();
  return (
    <Link
      className='newPostMobile'
      to='/notwitter/newpost'
      onClick={() => {
        dispatch({ type: actions.CURRENT_PAGE, payload: "New Post" });
        dispatch({ type: actions.NEW_POST_MOBILE_OPEN });
      }}
    >
      <CreateIcon fontSize='large' />
    </Link>
  );
};

export default NewPostMobile;
