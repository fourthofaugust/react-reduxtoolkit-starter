import "./App.css";
import ROUTES from "./routes";
import React, {Suspense} from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <div>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
        <Switch>
          {ROUTES.map((route) => (
            <Route
              key={route.key}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
