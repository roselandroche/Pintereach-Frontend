import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { getToken } from "./utils/api";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
import Articles from "./components/Articles";
import UpdateArticle from "./components/UpdateArticle";
import Register from "./components/Register";
import AddArticle from "./components/AddArticle";

import "./App.css";

function App() {
  const signedIn = getToken();

  return (
    <div className="wrapper">
      <div className="App">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Dashboard} />
        <ProtectedRoute exact path="/articles/:id" component={Articles} />
        <ProtectedRoute exact path="/addarticle" component={AddArticle} />
        <ProtectedRoute exact path="/updatearticle" component={UpdateArticle} />
        <ProtectedRoute exact path="/logout" component={Logout} />
      </div>
    </div>
  );
}

export default withRouter(App);
