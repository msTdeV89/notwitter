import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import News from "./components/News";
import NewPostMobile from "./components/NewPostMobile";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "./redux/actions/actionTypes";
import { getUserData } from "./redux/actions/userActions";
import { getPosts } from "./redux/actions/postActions";
import NewPostPage from "./pages/NewPostPage";

function App({ getUserData, getPosts }) {
  const user = useSelector((state) => state.user.user);
  const u = localStorage.getItem("notwitterUser");
  const dispatch = useDispatch();
  useEffect(() => {
    if (u) {
      dispatch({ type: actions.LOGIN, payload: JSON.parse(u) });
    }
  }, [user, dispatch, u]);
  useEffect(() => {
    if (user) getUserData();
  }, [getUserData, user]);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className='app'>
      <Menu />
      <main className='container'>
        <Header />
        <Switch>
          <Route exact path='/noTwitter' component={Main} />
          <Route path='/noTwitter/signup' component={SignUp} />
          <Route path='/noTwitter/newpost' component={NewPostPage} />
          <Route path='/noTwitter/profile' component={Profile} />
        </Switch>
      </main>
      {user ? <NewPostMobile /> : null}
      <News />
    </div>
  );
}

export default connect(null, { getUserData, getPosts })(App);
