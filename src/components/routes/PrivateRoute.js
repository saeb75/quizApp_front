import React from "react";

import { Navigate, Outlet, Route } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element, redirect = "/login" }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={redirect} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
