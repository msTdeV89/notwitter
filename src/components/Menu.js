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
  const currentPage = useSelector((state) => state.global.currentPage);
  const dispatch = useDispatch();
  return user ? (
    <header className='menu'>
      <nav>
        <ul>
          <LinkItem
            path='/notwitter'
            title='Home'
            icon={<HomeIcon fontSize='large' />}
            isActive={currentPage === "Home"}
            func={() =>
              dispatch({ type: actions.CURRENT_PAGE, payload: "Home" })
            }
          />
          <LinkItem
            path='/notwitter/profile'
            title='Profile'
            icon={<FaceIcon fontSize='large' />}
            isActive={currentPage === "Profile"}
            func={() =>
              dispatch({ type: actions.CURRENT_PAGE, payload: "Profile" })
            }
          />
          <LinkItem
            path='/notwitter'
            title='Log Out'
            func={async () => {
              await auth
                .signOut()
                .then(() => {
                  localStorage.removeItem("notwitterUser");
                  localStorage.removeItem("notwitterCurrentUser");
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
