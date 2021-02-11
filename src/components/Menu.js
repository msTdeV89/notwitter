import React from "react";
import LinkItem from "../reusable/LinkItem";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import * as actions from "../redux/actions/actionTypes";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase";

const Menu = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return user ? (
    <header className='menu'>
      <nav>
        <ul>
          <LinkItem
            path='/notwitter'
            title='Home'
            icon={<HomeIcon fontSize='large' />}
            isActive
          />
          <LinkItem
            path='/profile'
            title='Profile'
            icon={<FaceIcon fontSize='large' />}
          />
          <LinkItem
            path='/notwitter'
            title='Log Out'
            func={async () => {
              await auth
                .signOut()
                .then(() => {
                  dispatch({ type: actions.SIGN_OUT });
                  console.log("Signed out.");
                })
                .catch((err) => {
                  console.log(err.code);
                  console.log(err.message);
                });
            }}
            icon={<ExitToAppIcon fontSize='large' />}
          />
        </ul>
      </nav>
    </header>
  ) : null;
};

export default Menu;
