import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

const ROUTES = [
  {
    path: "/home",
    key: "ROOT",
    exact: true,
    component: Home,
    children: [],
  },
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    component: Login,
  },
  {
    key: "NOT_FOUND",
    exact: false,
    component: PageNotFound,
  },
];

export default ROUTES;
