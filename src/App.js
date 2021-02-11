import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import News from "./components/News";
import NewPostMobile from "./components/NewPostMobile";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className='app'>
      <Menu />
      <main className='container'>
        <Header />
        <Switch>
          <Route exact path='/noTwitter' component={Main} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </main>
      {user ? <NewPostMobile /> : null}
      <News />
    </div>
  );
}

export default App;
