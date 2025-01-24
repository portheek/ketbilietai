import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  var isAdmin = localStorage.getItem("isAdmin");

  return (isAuthenticated & isAdmin) ? <Component {...rest} /> : <Navigate to="/menu" />;
};

export default AdminRoute;
