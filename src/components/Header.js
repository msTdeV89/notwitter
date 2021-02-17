import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import * as actions from "../redux/actions/actionTypes";
import { useHistory } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  const title = useSelector((state) => state.global.currentPage);
  const newPostIsOpen = useSelector((state) => state.global.newPostIsOpen);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <header className='header'>
      {user ? (
        <React.Fragment>
          {newPostIsOpen ? (
            <IconButton
              onClick={() => {
                history.push("/notwitter");
                dispatch({ type: actions.CURRENT_PAGE, payload: "Home" });
                dispatch({ type: actions.NEW_POST_MOBILE_CLOSE });
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          ) : (
            <Avatar />
          )}
          <h3>{title}</h3>
        </React.Fragment>
      ) : (
        <h3>noTwitter</h3>
      )}
    </header>
  );
};

export default Header;
